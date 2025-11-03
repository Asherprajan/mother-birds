# Admin Dashboard Setup Guide

## Overview

This guide will help you set up and configure the Mother Birds admin dashboard with authentication and full CRUD operations.

## Prerequisites

- Supabase project already created
- Environment variables configured (`.env.local`)
- Next.js application running

## 1. Enable Supabase Authentication

### Step 1: Enable Email Authentication in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Providers**
3. Enable **Email** provider
4. Configure email settings as needed

### Step 2: Create Admin User

You can create an admin user in two ways:

#### Option A: Via Supabase Dashboard

1. Go to **Authentication** > **Users**
2. Click **Add user** > **Create new user**
3. Enter email and password
4. Click **Create user**

#### Option B: Via SQL (Recommended for adding role)

```sql
-- Create admin user with custom role
INSERT INTO auth.users (
  email,
  encrypted_password,
  email_confirmed_at,
  raw_user_meta_data
)
VALUES (
  'admin@motherbirds.com',
  crypt('YourSecurePassword123!', gen_salt('bf')),
  now(),
  '{"role": "admin"}'::jsonb
);
```

## 2. Database Schema (Already Created)

Your database should already have these tables:

- `categories` - Product categories
- `products` - Product inventory

## 3. Row Level Security (RLS) Policies

### Important: Configure RLS for Admin Access

Run these SQL commands in Supabase SQL Editor:

```sql
-- Allow authenticated users to read categories
CREATE POLICY "Allow authenticated read access to categories"
ON categories FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to insert categories
CREATE POLICY "Allow authenticated insert access to categories"
ON categories FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow authenticated users to update categories
CREATE POLICY "Allow authenticated update access to categories"
ON categories FOR UPDATE
TO authenticated
USING (true);

-- Allow authenticated users to delete categories
CREATE POLICY "Allow authenticated delete access to categories"
ON categories FOR DELETE
TO authenticated
USING (true);

-- Allow authenticated users to read products
CREATE POLICY "Allow authenticated read access to products"
ON products FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to insert products
CREATE POLICY "Allow authenticated insert access to products"
ON products FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow authenticated users to update products
CREATE POLICY "Allow authenticated update access to products"
ON products FOR UPDATE
TO authenticated
USING (true);

-- Allow authenticated users to delete products
CREATE POLICY "Allow authenticated delete access to products"
ON products FOR DELETE
TO authenticated
USING (true);
```

## 4. Access the Admin Dashboard

### Login Page

Navigate to: `http://localhost:3000/admin/login`

**Default Credentials:**

- Email: `admin@motherbirds.com` (or the email you created)
- Password: Your configured password

### Dashboard Routes

After login, you can access:

- **Dashboard Overview**: `/admin/dashboard`
- **Product Management**: `/admin/products`
- **Category Management**: `/admin/categories`

## 5. Features

### Category Management

- ✅ Create new categories
- ✅ Edit existing categories
- ✅ Delete categories (with confirmation)
- ✅ Search categories
- ✅ View all categories

### Product Management

- ✅ Create new products with full details
- ✅ Edit existing products
- ✅ Delete products (with confirmation)
- ✅ Search products
- ✅ View all products in table format
- ✅ Assign categories to products
- ✅ Set featured/popular flags
- ✅ Manage stock status
- ✅ Add ingredients, tags, and specifications

### Authentication

- ✅ Secure login with email/password
- ✅ Protected routes (auto-redirect if not authenticated)
- ✅ Session management
- ✅ Logout functionality

## 6. Security Best Practices

### Environment Variables

Ensure your `.env.local` file contains:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Password Security

- Use strong passwords (min 8 characters, mixed case, numbers, symbols)
- Never commit credentials to version control
- Rotate passwords regularly

### RLS Policies

- Always enable RLS on tables
- Restrict admin operations to authenticated users
- Consider adding role-based access control for production

## 7. Troubleshooting

### Cannot Login

1. Verify user exists in Supabase Auth > Users
2. Check email is verified (or disable email verification)
3. Confirm RLS policies are correctly set up

### Cannot Create/Edit Products or Categories

1. Check RLS policies are enabled
2. Verify user is authenticated
3. Check browser console for error messages
4. Ensure required fields are filled

### Images Not Displaying

1. Verify image URLs are publicly accessible
2. Check CORS settings if using external image hosts
3. Consider using Supabase Storage for images

## 8. Next Steps

### Production Deployment

1. Update environment variables for production
2. Enable email verification
3. Add rate limiting for auth endpoints
4. Consider implementing:
   - Password reset functionality
   - Multi-factor authentication
   - Activity logging
   - Image upload via Supabase Storage
   - Bulk operations

### Advanced Features (Optional)

- Add role-based permissions (admin, editor, viewer)
- Implement product variants
- Add inventory tracking
- Create audit logs
- Export data to CSV/Excel
- Batch product upload

## 9. File Structure

```
app/
├── admin/
│   ├── layout.tsx           # Auth provider wrapper
│   ├── login/
│   │   └── page.tsx         # Login page
│   ├── dashboard/
│   │   ├── layout.tsx       # Dashboard layout with sidebar
│   │   └── page.tsx         # Dashboard overview
│   ├── products/
│   │   └── page.tsx         # Product management
│   └── categories/
│       └── page.tsx         # Category management
├── layout.tsx               # Root layout
└── ...

components/
└── AuthProvider.tsx         # Auth context and hooks

lib/
├── auth.ts                  # Authentication helpers
├── admin-api.ts             # Admin CRUD operations
├── api.ts                   # Public API functions
├── supabase.ts              # Supabase client
├── types.ts                 # TypeScript types
└── database.types.ts        # Database schema types
```

## 10. Support

For issues or questions:

1. Check Supabase logs in Dashboard > Logs
2. Review browser console for client-side errors
3. Verify database permissions and RLS policies
4. Check environment variables are correctly set

---

**Last Updated:** 2024-11-03
**Version:** 1.0.0
