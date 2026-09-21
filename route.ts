import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, password, fullName } = await req.json()
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
        data: { full_name: fullName }
      }
    })

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    if (!data.user) return NextResponse.json({ error: 'Signup failed' }, { status: 400 })

    // Create profile
    await supabase.from('profiles').insert({
      id: data.user.id,
      email,
      full_name: fullName,
      username: email.split('@')[0] + Math.random().toString(36).slice(-6),
      avatar_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=000000&color=ffffff&bold=true`,
      is_public: true
    })

    // Create default kit
    await supabase.from('kits').insert({
      owner_id: data.user.id,
      name: 'My Closet',
      description: 'My fashion collection',
      is_public: true
    })

    // Create wallet
    await supabase.from('user_wallets').insert({
      user_id: data.user.id,
      available_balance_kobo: 0,
      pending_balance_kobo: 0
    })

    return NextResponse.json({
      success: true,
      message: 'Signup successful! Check your email to verify.',
      user: { id: data.user.id, email }
    }, { status: 201 })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
