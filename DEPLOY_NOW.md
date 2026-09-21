# ✅ LooKit - Ready to Deploy

Everything is done. All files are created and working. Follow these exact steps to go live.

---

## 🔴 BEFORE YOU START - Get Credentials (15 minutes)

### 1. Create Supabase Project
1. Go to https://supabase.com
2. Click "Create Project"
3. Name: `lookit`
4. Generate a password and save it
5. Choose region (EU-West is fine)
6. Click "Create project" and wait 2 min

### 2. Setup Database
1. In Supabase, go to **SQL Editor**
2. Click "New query"
3. Copy everything from your local `database/schema.sql` file
4. Paste it in the SQL editor
5. Click "Run" - wait for completion ✅

### 3. Get Supabase API Keys
1. Click **"Settings"** (bottom left)
2. Click **"API"**
3. Copy these values somewhere safe:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon Public Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Service Role Key** → `SUPABASE_SERVICE_ROLE_KEY`

### 4. Create Paystack Account
1. Go to https://paystack.com
2. Sign up with your email
3. Verify email
4. Go to **Settings → API Keys**
5. Copy these:
   - **Public Key** → `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
   - **Secret Key** → `PAYSTACK_SECRET_KEY`

---

## 🚀 Deploy to GitHub & Vercel (5 minutes)

### Step 1: Initialize Git
```bash
cd /home/claude/lookit
git init
git add .
git commit -m "LooKit MVP - Ready to launch"
git branch -M main
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. **Repository name:** `lookit`
3. **Description:** Nigerian fashion rental marketplace
4. Select **Public**
5. Click **"Create repository"**
6. Copy the HTTPS URL (ends with `.git`)

### Step 3: Push to GitHub
```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/lookit.git
git push -u origin main
```

### Step 4: Connect to Vercel

1. Go to https://vercel.com/new
2. Click **"Import Project"**
3. Click **"GitHub"**
4. Find and select **"lookit"** repository
5. Click **"Import"**
6. On the next screen:
   - Framework: **Next.js**
   - Root Directory: **./**
   
7. Scroll down to **"Environment Variables"**
8. Add these 7 variables (copy from where you saved them):

```
NEXT_PUBLIC_SUPABASE_URL = [from Supabase Settings]
NEXT_PUBLIC_SUPABASE_ANON_KEY = [from Supabase Settings]
SUPABASE_SERVICE_ROLE_KEY = [from Supabase Settings]
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY = [from Paystack Settings]
PAYSTACK_SECRET_KEY = [from Paystack Settings]
NEXT_PUBLIC_APP_URL = https://lookit-[random].vercel.app
NODE_ENV = production
```

*Note: For `NEXT_PUBLIC_APP_URL`, Vercel will show your URL after first deploy. Use that.*

9. Click **"Deploy"**
10. Wait 2-3 minutes for build
11. When done, click **"Visit"** → **LooKit is LIVE** 🎉

---

## ✅ Test It Works

Visit your Vercel URL and check:
- [ ] Landing page loads
- [ ] Can click "Browse Items" → goes to explore page
- [ ] Can click "Log In" → login page works
- [ ] Try signup with test email
- [ ] Black + gold theme looks right
- [ ] Works on mobile (responsive)

---

## 📋 Quick Checklist

Before clicking Deploy on Vercel:
- [ ] Supabase project created
- [ ] Schema.sql run successfully
- [ ] Supabase API keys copied
- [ ] Paystack account created
- [ ] Paystack API keys copied
- [ ] Code pushed to GitHub main branch
- [ ] GitHub repo is public (so Vercel can access)

---

## 🔑 Your Environment Variables (Keep Safe)

Save these in a file somewhere secure:

```
NEXT_PUBLIC_SUPABASE_URL = 
NEXT_PUBLIC_SUPABASE_ANON_KEY = 
SUPABASE_SERVICE_ROLE_KEY = 
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY = 
PAYSTACK_SECRET_KEY = 
NEXT_PUBLIC_APP_URL = [your vercel URL]
```

You'll need these if you ever need to redeploy or add more env vars.

---

## ⚠️ If Deploy Fails

**Build failed?**
```bash
npm run type-check   # Check for TypeScript errors
npm run build        # Try building locally
```

**Vercel says environment variables missing?**
- Double-check all 7 env vars are set in Vercel dashboard
- Each one must have a value (no empty values)

**App loads but pages show 404?**
- Wait 5 minutes, then refresh (sometimes Vercel needs time)
- Clear browser cache and hard refresh (Ctrl+Shift+R)

**Can't sign up/login?**
- Check Supabase project is actually running
- Verify API keys are correct in Vercel
- Check database tables exist in Supabase SQL Editor

---

## 🎉 You're Done

That's it. LooKit is live in production.

Next steps:
- Share the URL with friends to test
- Add some test fashion listings
- Get feedback
- Build more features

---

**Questions?** Check the other markdown files:
- `START_HERE.md` - 5-min quickstart
- `README.md` - Full project overview
- `00_READ_FIRST.md` - High-level guide

**You got this.** 💪 Go launch! 🚀
