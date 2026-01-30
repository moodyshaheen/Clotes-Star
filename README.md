# Clotes Star — Premium Online Shop

A full-stack e-commerce web application built with **Next.js 16**, featuring a modern storefront, user authentication, shopping cart, order management, and a dedicated admin dashboard.

---

## Features

### Storefront
- **Hero** — Landing section with clear call-to-action
- **Featured Products** — Product grid with category filters (Fashion, Electronics, Jewellery, Home)
- **Testimonials** — Customer reviews carousel
- **Pricing / Plans** — Subscription or plan section
- **Contact** — Contact form with validation and character limit
- **Responsive navbar** — Transparent on hero, solid on scroll; mobile hamburger menu with slide-down
- **Smooth scroll** — Nav links scroll to sections on the homepage

### User
- **Registration & Login** — JWT-based auth via NextAuth.js (credentials)
- **Shopping cart** — Add products, update quantity, remove items, place order
- **Orders** — Orders created from cart and stored in the database

### Admin Dashboard
- **Orders** — List orders, update status (Pending → Processing → Shipped → Delivered / Cancelled)
- **Users** — List registered users and order counts
- **Messages** — View and mark contact form submissions as read
- **Protected routes** — Admin pages require `ADMIN` role; main site navbar/footer hidden on `/admin`

### Technical
- **API routes** — REST-style endpoints for auth, register, cart, orders, products, users, messages
- **Database** — Prisma ORM with PostgreSQL; schema for Users, Products, CartItems, Orders, OrderItems, Messages
- **Validation** — Zod for request validation; bcrypt for password hashing

---

## Tech Stack

| Layer        | Technology                    |
| ------------ | ----------------------------- |
| Framework    | Next.js 16 (App Router)       |
| UI           | React 19, Tailwind CSS       |
| Auth         | NextAuth.js 4 (Credentials)  |
| Database     | Prisma + PostgreSQL          |
| Validation   | Zod                           |
| Icons        | react-icons                   |

---

## Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** or **yarn** or **pnpm**

---

## Installation

### 1. Clone and install

```bash
git clone <repository-url>
cd clotes-star
npm install
```

### 2. Environment variables

Create a `.env` file in the project root:

```env
# Database (PostgreSQL — مطلوب للتطوير والنشر على Vercel)
# للتطوير المحلي أو النشر استخدم رابط من Neon أو Vercel Postgres (انظر DEPLOYMENT.md)
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-in-production"
```

For production on Vercel, set `DATABASE_URL` (PostgreSQL from Neon or Vercel Postgres), `NEXTAUTH_SECRET`, and `NEXTAUTH_URL`. See **DEPLOYMENT.md** for step-by-step instructions.

### 3. Database setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema and create/update DB
npm run db:push

# Seed admin user and sample products
npm run db:seed
```

### 4. Run the app

```bash
# Development (Webpack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Default Admin Access

After running `npm run db:seed`:

| Field    | Value                    |
| -------- | ------------------------ |
| Email    | `admin@clotes-star.com`  |
| Password | `admin123`               |

1. Go to [http://localhost:3000/login](http://localhost:3000/login).
2. Sign in with the credentials above.
3. Use the **Admin** button in the navbar or go to [http://localhost:3000/admin](http://localhost:3000/admin).

Change the admin password in production.

---

## Project Structure

```
clotes-star/
├── app/
│   ├── admin/              # Admin dashboard (Orders, Users, Messages)
│   ├── api/                # API routes (auth, cart, orders, products, users, messages, register)
│   ├── login/
│   ├── register/
│   ├── layout.tsx
│   ├── page.tsx            # Homepage
│   ├── providers.tsx       # NextAuth SessionProvider
│   └── Shell.tsx           # Conditional Navbar/Footer (hidden on /admin)
├── components/             # Reusable UI (Navbar, Footer, Hero, Categoris, Cart, Contact, etc.)
├── lib/
│   ├── auth.ts             # NextAuth config
│   └── prisma.ts           # Prisma client singleton
├── prisma/
│   ├── schema.prisma       # Data models
│   └── seed.ts             # Admin user + sample products
├── public/                 # Static assets
└── types/                  # TypeScript types (e.g. CustomButtonProps, NextAuth)
```

---

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start dev server (Webpack)     |
| `npm run build`   | Production build               |
| `npm run start`   | Start production server        |
| `npm run lint`    | Run ESLint                     |
| `npm run typecheck` | Run TypeScript compiler (no emit) |
| `npm run db:push` | Push Prisma schema to DB       |
| `npm run db:generate` | Generate Prisma client     |
| `npm run db:seed` | Seed admin + products          |
| `npm run db:studio` | Open Prisma Studio (DB GUI)  |

---

## API Overview

| Method | Route            | Description                    | Auth     |
| ------ | ---------------- | ------------------------------ | -------- |
| POST   | `/api/register`  | Create user                    | Public   |
| GET/POST | `/api/auth/[...nextauth]` | NextAuth handlers      | —        |
| GET    | `/api/products`  | List products (optional `?category=`) | Public |
| GET/POST/DELETE | `/api/cart` | Cart read / add / remove       | User     |
| GET/POST/PATCH | `/api/orders` | List orders, create order, update status | User / Admin |
| GET    | `/api/users`     | List users                     | Admin    |
| GET/POST/PATCH | `/api/messages` | List/send messages, mark read | Admin / Public (POST) |

---

## Production Checklist

- [ ] Set a strong `NEXTAUTH_SECRET`
- [ ] Set `DATABASE_URL` to a PostgreSQL URL (Neon or Vercel Postgres). See **DEPLOYMENT.md**
- [ ] Change default admin password
- [ ] Set `NEXTAUTH_URL` to your production URL
- [ ] Enable HTTPS
- [ ] Add rate limiting and security headers as needed

---

## License

This project is private. All rights reserved.
