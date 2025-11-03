# Admin Dashboard Quick Reference

## 🚀 Getting Started

### 1. Access the Admin Panel

```
URL: http://localhost:3001/admin/login
```

### 2. Default Login

You need to create an admin user first in Supabase:

**Via Supabase Dashboard:**

1. Go to Authentication > Users
2. Click "Add user" > "Create new user"
3. Enter email and password
4. Click "Create user"

### 3. Dashboard Navigation

After login, you'll be redirected to: `/admin/dashboard`

**Main Sections:**

- 📊 **Dashboard** - Overview with statistics
- 📦 **Products** - Manage all products
- 📁 **Categories** - Manage product categories

---

## 📁 Category Management

### Create Category

1. Click "Add Category" button
2. Fill in:
   - **Name\*** (required)
   - Description (optional)
   - Image URL (optional)
3. Click "Create"

### Edit Category

1. Click "Edit" button on category card
2. Modify fields
3. Click "Update"

### Delete Category

1. Click "Delete" button
2. Confirm deletion
3. ⚠️ Warning: This affects products in this category

---

## 📦 Product Management

### Create Product

**Required Fields:**

- Product Name\*
- Short Description\*
- Image URL\*

**Optional Fields:**

- Category
- Pack Size (e.g., "500g")
- Full Description
- Ingredients (comma-separated)
- Packaging Type (e.g., "Jar", "Bottle")
- Weight/Volume
- Rating (0-5)
- Stock Status (In Stock, Out of Stock, Low Stock)
- Tags (comma-separated)

**Flags:**

- ✅ Featured Product
- ✅ Popular Product

### Product Form Example

```
Product Name: Mango Pickle Premium
Category: Pickles & Chutney
Pack Size: 500g
Short Description: Traditional mango pickle with authentic spices
Full Description: Our signature mango pickle is made with...
Ingredients: Mango, Salt, Spices, Oil, Turmeric
Packaging Type: Glass Jar
Weight/Volume: 500g
Rating: 4.8
Stock Status: In Stock
Tags: spicy, traditional, bestseller
☑ Featured Product
☑ Popular Product
```

### Edit Product

1. Click edit icon (pencil) in Actions column
2. Modify any fields
3. Click "Update Product"

### Delete Product

1. Click delete icon (trash) in Actions column
2. Confirm deletion

---

## 🔍 Search & Filter

### Search Products

- Type in search box to filter by product name or description
- Results update in real-time

### Search Categories

- Type in search box to filter by category name or description
- Results update in real-time

---

## 🛡️ Security Features

### Authentication

- ✅ Login required for all admin pages
- ✅ Auto-redirect to login if not authenticated
- ✅ Session persistence
- ✅ Secure logout

### Permissions

- All CRUD operations require authentication
- Row Level Security (RLS) enabled in Supabase
- Only authenticated users can modify data

---

## 📊 Dashboard Statistics

The dashboard shows:

- 📦 Total Products
- 📁 Total Categories
- ⭐ Featured Products Count
- 🔥 Popular Products Count

Click any card to navigate to relevant section.

---

## 🎨 UI Features

### Responsive Design

- ✅ Mobile-friendly sidebar
- ✅ Hamburger menu on mobile
- ✅ Responsive tables and grids

### Visual Feedback

- ✅ Loading states
- ✅ Success/error toasts
- ✅ Confirmation dialogs
- ✅ Smooth animations

### Status Indicators

- 🟢 **In Stock** - Green badge
- 🔴 **Out of Stock** - Red badge
- 🟡 **Low Stock** - Yellow badge
- ⭐ **Featured** - Amber badge
- 🔥 **Popular** - Red badge

---

## 🐛 Common Issues

### Cannot Login

✅ **Solution:**

1. Verify user exists in Supabase Auth
2. Check email/password are correct
3. Ensure RLS policies are set up (see ADMIN_SETUP.md)

### Cannot Create/Edit Items

✅ **Solution:**

1. Check authentication is active
2. Verify RLS policies in Supabase
3. Check browser console for errors

### Images Not Showing

✅ **Solution:**

1. Use publicly accessible image URLs
2. Check URL format (https://)
3. Consider using Supabase Storage

---

## 💡 Best Practices

### Categories

- Use clear, descriptive names
- Keep descriptions concise
- Organize logically

### Products

- Use high-quality images
- Fill all relevant fields
- Use consistent naming
- Add appropriate tags
- Mark featured/popular strategically

### Data Entry

- Double-check before deleting
- Use search before creating duplicates
- Keep ingredients and tags comma-separated
- Test image URLs before saving

---

## 🔐 Sign Out

Click "Sign Out" button in sidebar to logout safely.

---

## 📝 Need Help?

Refer to `ADMIN_SETUP.md` for:

- Detailed setup instructions
- RLS policy configuration
- Troubleshooting guides
- Advanced features

---

**Version:** 1.0.0  
**Last Updated:** 2024-11-03
