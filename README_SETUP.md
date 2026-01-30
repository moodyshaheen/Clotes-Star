# Clotes Star - Setup Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Database**
   ```bash
   npm run db:push
   npm run db:seed
   ```

3. **Generate Prisma Client**
   ```bash
   npm run db:generate
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## Default Admin Credentials

- **Email:** admin@clotes-star.com
- **Password:** admin123

⚠️ **Important:** Change the admin password in production!

## Features

### User Features
- ✅ User Registration & Login
- ✅ Shopping Cart
- ✅ Product Browsing & Filtering
- ✅ Place Orders
- ✅ Contact Form

### Admin Features
- ✅ Admin Dashboard
- ✅ Orders Management (View, Update Status)
- ✅ Users Management
- ✅ Messages Management (View Contact Form Submissions)
- ✅ Protected Routes

## Database Schema

- **Users** - User accounts (USER/ADMIN roles)
- **Products** - Product catalog
- **CartItems** - Shopping cart items
- **Orders** - Customer orders
- **OrderItems** - Order line items
- **Messages** - Contact form submissions

## API Routes

- `/api/auth/[...nextauth]` - Authentication
- `/api/register` - User registration
- `/api/cart` - Shopping cart operations
- `/api/orders` - Order management
- `/api/users` - User management (Admin only)
- `/api/messages` - Contact messages (Admin only)

## Admin Routes

- `/admin` - Orders management
- `/admin/users` - Users management
- `/admin/messages` - Messages management

## Environment Variables

Create a `.env` file with a **PostgreSQL** URL (from Neon or Vercel Postgres — see **DEPLOYMENT.md**):

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
```

## Production Checklist

- [ ] Change NEXTAUTH_SECRET
- [ ] Change admin password
- [ ] Set DATABASE_URL (PostgreSQL) on Vercel — see **DEPLOYMENT.md**
- [ ] Add environment variables to production
- [ ] Enable HTTPS
- [ ] Add error logging
- [ ] Add email notifications for orders/messages
