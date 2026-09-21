# LooKit - Nigerian Fashion Rental Marketplace PWA

A complete, production-ready fashion rental marketplace for Nigeria built with Next.js 15, React 18, TypeScript, Tailwind CSS, and Supabase.

## Status

**MVP Complete & Deployment-Ready** ✅

- Database schema: ✅
- Authentication: ✅
- Core marketplace: ✅
- Listings API: ✅
- Booking system: ✅
- Payment integration: ✅
- PWA setup: ✅

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Payments**: Paystack
- **Hosting**: Vercel
- **PWA**: next-pwa

All dependencies pinned to latest stable, production-ready versions.

## Quick Deploy

### 1. Prerequisites
- Supabase account (free)
- Vercel account (free)
- Paystack account (free - test mode)
- Node.js 20.11.0+
- Git

### 2. Local Setup

```bash
# Clone
git clone <repo>
cd lookit

# Install
nvm use  # Uses .nvmrc (Node 20.11.0)
npm install

# Environment
cp .env.example .env.local
# Edit .env.local with your credentials
```

### 3. Database Setup

1. Create Supabase project: https://supabase.com
2. Go to SQL Editor
3. Copy entire `database/schema.sql`
4. Paste and run
5. Copy credentials to `.env.local`

### 4. Paystack Setup

1. Create account: https://paystack.com
2. Get test keys from Settings
3. Add to `.env.local`

### 5. Deploy to Vercel

```bash
# Push to GitHub
git push

# In Vercel dashboard:
# 1. Import from GitHub
# 2. Add env variables from .env.local
# 3. Deploy
```

That's it! LooKit is live. 🚀

## Demo Credentials

```
Email: demo@lookit.local
Password: Test@1234
```

## Core Features

### For Renters
- Browse fashion items by category
- Search and filter listings
- View item details with images
- Select rental dates
- Pay via Paystack (₦1,000 commitment fee)
- Track active rentals
- Rental history

### For Owners  
- Create fashion listings
- Upload product images
- Set rental prices
- Manage rental requests
- Track earnings
- View wallet balance
- Withdraw to bank account

### Platform
- Secure authentication
- ₦1,000 commitment fee per rental
- ₦1,000 late return fee (₦500 owner, ₦500 LooKit)
- Real payment processing (Paystack)
- Notifications
- Admin dashboard
- Reporting system

## API Endpoints

```
Authentication
POST   /api/auth/signup           Create account
POST   /api/auth/login            User login
GET    /api/auth/me               Current user

Marketplace  
GET    /api/listings              Browse items
POST   /api/listings              Create listing
GET    /api/listings/[id]         Item details
PUT    /api/listings/[id]         Edit listing
DELETE /api/listings/[id]         Remove listing

Bookings
POST   /api/bookings              Create rental request
GET    /api/bookings              User rentals
PATCH  /api/bookings/[id]         Update rental status

Payments
POST   /api/payments/initialize   Start payment
POST   /api/payments/verify       Verify payment
POST   /api/payments/webhook      Paystack webhook

User
GET    /api/user/dashboard        Dashboard data
GET    /api/user/profile          User profile
PUT    /api/user/profile          Update profile
GET    /api/user/wallet           Wallet info
```

## File Structure

```
lookit/
├── app/                          # Next.js app directory
│   ├── api/
│   │   ├── auth/
│   │   │   ├── signup/route.ts   # Register
│   │   │   ├── login/route.ts    # Login
│   │   │   └── callback/route.ts # OAuth callback
│   │   ├── listings/
│   │   │   ├── route.ts          # GET browse, POST create
│   │   │   └── [id]/route.ts     # GET details, PUT edit
│   │   ├── bookings/route.ts     # Rental requests
│   │   ├── payments/
│   │   │   ├── initialize/route.ts
│   │   │   ├── verify/route.ts
│   │   │   └── webhook/route.ts
│   │   └── user/
│   │       ├── dashboard/route.ts
│   │       └── profile/route.ts
│   ├── auth/
│   │   ├── signup/page.tsx       # Sign up form
│   │   ├── login/page.tsx        # Login form
│   │   └── callback/page.tsx     # Auth redirect
│   ├── explore/page.tsx          # Browse marketplace
│   ├── listings/
│   │   ├── page.tsx              # Listings list
│   │   └── [id]/page.tsx         # Item details
│   ├── cart/page.tsx             # Shopping cart
│   ├── checkout/page.tsx         # Payment page
│   ├── dashboard/
│   │   ├── owner/page.tsx        # Owner dashboard
│   │   └── renter/page.tsx       # Renter dashboard
│   ├── admin/page.tsx            # Admin panel
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/
│   ├── Header.tsx                # Navigation
│   ├── Footer.tsx                # Footer
│   ├── ListingCard.tsx           # Item card component
│   └── ...                       # Other components
├── lib/
│   ├── supabase-server.ts        # Server client
│   ├── supabase-browser.ts       # Client library
│   └── utils.ts                  # Helpers
├── database/
│   ├── schema.sql                # Full database schema
│   └── migrations/               # SQL migrations
├── public/
│   ├── manifest.json             # PWA manifest
│   ├── icons/                    # App icons
│   └── ...                       # Static assets
├── scripts/
│   ├── seed.ts                   # Database seeding
│   └── migrate.ts                # Migrations
├── types/
│   └── index.ts                  # TypeScript types
├── .env.example                  # Environment template
├── .nvmrc                        # Node version (20.11.0)
├── next.config.ts               # Next.js config
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
├── package.json                 # Dependencies
└── DEPLOY.md                    # Deployment guide
```

## Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Paystack
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_...
PAYSTACK_SECRET_KEY=sk_test_...
```

## Performance

- ✅ Optimized images
- ✅ Code splitting
- ✅ Server-side rendering
- ✅ Static generation where possible
- ✅ API compression
- ✅ CSS minification
- ✅ JavaScript compression

## Security

- ✅ SQL injection prevention (Supabase RLS)
- ✅ XSS protection
- ✅ CSRF tokens
- ✅ Secure password hashing
- ✅ API rate limiting
- ✅ Environment secrets protection
- ✅ Payment verification (server-side)

## Mobile

- ✅ Responsive design (mobile-first)
- ✅ Touch-optimized buttons
- ✅ PWA installable
- ✅ Offline support
- ✅ App icons
- ✅ Splash screen

## Testing

```bash
npm run build          # Production build
npm run type-check     # TypeScript check
npm run lint           # Linting
npm run test           # Unit tests
npm run dev            # Development server
```

## Troubleshooting

**"Cannot find module '@/lib/supabase-server'"**
- tsconfig.json paths alias: `"@/*": ["./*"]`
- Restart dev server

**"Supabase connection refused"**
- Check NEXT_PUBLIC_SUPABASE_URL is correct
- Verify project is active on supabase.com

**"Payment fails in production"**
- Confirm env vars on Vercel
- Check Paystack keys are for production
- Verify webhook URL in Paystack dashboard

**"Build fails on Vercel"**
- Run `npm run type-check` locally first
- Check `npm run build` succeeds locally
- Verify all env vars are set in Vercel

## Contributing

This is an MVP. Improvements welcome!

## License

MIT

## Support

- Issues: GitHub Issues
- Email: support@lookit.ng

---

**Made in Nigeria** 🇳🇬 with ❤️

LooKit: Where style meets affordability.
