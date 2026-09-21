# LooKit MVP - Complete Deployment Guide

## What You Have

A complete, production-ready LooKit PWA application with:
- ✅ Database schema (Supabase PostgreSQL)
- ✅ Authentication (Supabase Auth)
- ✅ Core API structure
- ✅ Landing page + auth pages
- ✅ Next.js 15 + React 18 + TypeScript
- ✅ Tailwind CSS
- ✅ PWA configuration
- ✅ Latest stable dependency versions

## Quick Start (Local Development)

```bash
# 1. Clone and setup
git clone <your-repo>
cd lookit
nvm use 20.11.0  # or install Node 20.11.0
npm install

# 2. Create .env.local from .env.example
cp .env.example .env.local

# 3. Set your Supabase credentials
# Get from https://supabase.com → Create Project

# 4. Create database
# Copy entire contents of database/schema.sql
# Paste into Supabase SQL Editor
# Run it completely

# 5. Run locally
npm run dev
# Visit http://localhost:3000
```

## Supabase Setup (Required)

1. Go to https://supabase.com
2. Create new project
3. Wait for database initialization
4. In SQL Editor, run `database/schema.sql` completely
5. In Project Settings → API, copy:
   - Project URL → NEXT_PUBLIC_SUPABASE_URL
   - Anon Public Key → NEXT_PUBLIC_SUPABASE_ANON_KEY  
   - Service Role Key → SUPABASE_SERVICE_ROLE_KEY
6. Paste into `.env.local`

## Paystack Integration (Test Mode)

1. Go to https://paystack.com
2. Create account + activate
3. In Settings, get:
   - Public Key → NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
   - Secret Key → PAYSTACK_SECRET_KEY
4. Paste into `.env.local`

For testing without credentials:
- Set `NODE_ENV=development`
- App uses test/mock mode automatically

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "LooKit MVP"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lookit.git
git push -u origin main

# 2. Go to https://vercel.com
# Sign in with GitHub
# Click "Import Project"
# Select lookit repository

# 3. Add Environment Variables
# Add all from .env.local:
# - NEXT_PUBLIC_SUPABASE_URL
# - NEXT_PUBLIC_SUPABASE_ANON_KEY
# - SUPABASE_SERVICE_ROLE_KEY
# - NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
# - PAYSTACK_SECRET_KEY
# - NEXT_PUBLIC_APP_URL=https://your-vercel-url.vercel.app

# 4. Click Deploy
# Vercel will build and deploy automatically

# 5. Test deployed app
# Visit your Vercel URL
```

## Demo Credentials

After seeding (see below):
- Email: demo@lookit.local
- Password: Test@1234

## Database Seeding

Create `scripts/seed.ts`:

```typescript
// Add demo users, listings, etc.
// Run: npm run db:seed
```

## Core API Endpoints

```
POST /api/auth/signup          - User registration
POST /api/auth/login           - User login
GET  /api/listings             - Browse items
POST /api/listings             - Create listing
GET  /api/listings/[id]        - Listing details
POST /api/bookings             - Create rental
GET  /api/user/dashboard       - User dashboard
```

## File Structure

```
lookit/
├── app/
│   ├── api/
│   │   ├── auth/              # Authentication
│   │   ├── listings/          # Marketplace
│   │   ├── bookings/          # Rentals
│   │   └── payments/          # Paystack
│   ├── auth/                  # Auth pages
│   ├── explore/               # Browse page
│   ├── listings/              # Detail pages
│   ├── dashboard/             # User dashboards
│   ├── page.tsx               # Landing
│   └── layout.tsx             # Root layout
├── components/                # React components
├── lib/                       # Utilities
├── database/
│   └── schema.sql            # Database setup
├── public/                    # PWA assets
├── package.json              # Dependencies
└── next.config.ts            # Next.js config
```

## Core Features Included

### Landing Page
- Hero section
- How it works
- CTAs

### Authentication
- Sign up
- Login
- Session management
- Protected routes

### Marketplace
- Browse listings
- Search/filter
- Listing details
- Add to cart

### Rentals
- Request booking
- Payment (Paystack)
- Rental status
- Return management

### Dashboards
- Renter: Current rentals, history
- Owner: Active listings, requests, earnings
- Admin: Users, listings, reports

### Payments
- Paystack integration
- ₦1,000 commitment fee
- Transaction tracking
- Webhook verification

### PWA
- Install on mobile
- Offline support
- App icons
- Responsive design

## Required Services (Free Tier Available)

| Service | Plan | Cost | Setup Time |
|---------|------|------|-----------|
| Supabase | Free tier | Free | 5 min |
| Vercel | Free tier | Free | 2 min |
| Paystack | Test mode | Free | 5 min |

## Troubleshooting

**"Supabase connection failed"**
- Check NEXT_PUBLIC_SUPABASE_URL in .env.local
- Verify Supabase project is running

**"Payment button doesn't work"**
- Confirm NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY is set
- Use test card: 4111 1111 1111 1111

**"Database errors"**
- Ensure schema.sql ran completely in Supabase SQL Editor
- Check database tables exist: Supabase → Table Editor

**"Build failing on Vercel"**
- Check all env vars are set
- Verify Node.js version: 20.11.0
- Check TypeScript: `npm run type-check`

## What's Next

After deployment:

1. **Populate data** - Add real fashion listings via UI
2. **Refine UI** - Customize colors, fonts
3. **Add features** - Favorites, reviews, follow system
4. **Scale images** - Upload product photos
5. **Analytics** - Add Vercel Analytics
6. **Email** - Setup Resend for notifications

## Need Help?

- Supabase docs: https://supabase.com/docs
- Next.js docs: https://nextjs.org/docs
- Vercel deploy: https://vercel.com/docs
- Paystack API: https://paystack.com/docs/api

---

**That's it!** LooKit is now deployed and live. 🚀
