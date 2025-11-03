-- ============================================================================
-- ADMIN DASHBOARD - ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================
-- Run this SQL in Supabase SQL Editor to enable admin access
-- This allows authenticated users to perform CRUD operations
-- ============================================================================

-- ============================================================================
-- CATEGORIES TABLE POLICIES
-- ============================================================================

-- Enable RLS on categories table (if not already enabled)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public read access to categories" ON categories;
DROP POLICY IF EXISTS "Allow authenticated read access to categories" ON categories;
DROP POLICY IF EXISTS "Allow authenticated insert access to categories" ON categories;
DROP POLICY IF EXISTS "Allow authenticated update access to categories" ON categories;
DROP POLICY IF EXISTS "Allow authenticated delete access to categories" ON categories;

-- Allow public (unauthenticated) read access to categories
-- This allows the public website to display categories
CREATE POLICY "Allow public read access to categories"
ON categories FOR SELECT
TO anon
USING (true);

-- Allow authenticated users (admins) to read categories
CREATE POLICY "Allow authenticated read access to categories"
ON categories FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users (admins) to insert categories
CREATE POLICY "Allow authenticated insert access to categories"
ON categories FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow authenticated users (admins) to update categories
CREATE POLICY "Allow authenticated update access to categories"
ON categories FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow authenticated users (admins) to delete categories
CREATE POLICY "Allow authenticated delete access to categories"
ON categories FOR DELETE
TO authenticated
USING (true);

-- ============================================================================
-- PRODUCTS TABLE POLICIES
-- ============================================================================

-- Enable RLS on products table (if not already enabled)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public read access to products" ON products;
DROP POLICY IF EXISTS "Allow authenticated read access to products" ON products;
DROP POLICY IF EXISTS "Allow authenticated insert access to products" ON products;
DROP POLICY IF EXISTS "Allow authenticated update access to products" ON products;
DROP POLICY IF EXISTS "Allow authenticated delete access to products" ON products;

-- Allow public (unauthenticated) read access to products
-- This allows the public website to display products
CREATE POLICY "Allow public read access to products"
ON products FOR SELECT
TO anon
USING (true);

-- Allow authenticated users (admins) to read products
CREATE POLICY "Allow authenticated read access to products"
ON products FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users (admins) to insert products
CREATE POLICY "Allow authenticated insert access to products"
ON products FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow authenticated users (admins) to update products
CREATE POLICY "Allow authenticated update access to products"
ON products FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow authenticated users (admins) to delete products
CREATE POLICY "Allow authenticated delete access to products"
ON products FOR DELETE
TO authenticated
USING (true);

-- ============================================================================
-- VERIFY POLICIES
-- ============================================================================

-- Run this to see all policies on categories table
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'categories';

-- Run this to see all policies on products table
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'products';

-- ============================================================================
-- NOTES:
-- ============================================================================
-- 1. These policies allow:
--    - Public (anon) users: READ ONLY access (for website display)
--    - Authenticated users: FULL CRUD access (for admin dashboard)
--
-- 2. For production, consider:
--    - Adding role-based access control
--    - Creating specific admin roles
--    - Implementing audit logging
--    - Adding rate limiting
--
-- 3. To create an admin user, run:
--    Go to Supabase Dashboard > Authentication > Users > Add user
--    Or use SQL to create a user with custom metadata
-- ============================================================================
