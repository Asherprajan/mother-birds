# Cloudinary Image Upload Setup Guide

## Overview

This guide will help you set up Cloudinary for image uploads in the Mother Birds admin dashboard.

## Step 1: Create Cloudinary Account

1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Click **Sign Up** (or Sign In if you have an account)
3. Complete the registration process
4. Verify your email

## Step 2: Get Your Credentials

1. Log in to your Cloudinary dashboard
2. Go to **Dashboard** (should be the default page)
3. You'll see your **Account Details** section with:

   - **Cloud Name** (e.g., `dxyz123abc`)
   - **API Key**
   - **API Secret**

4. **Copy your Cloud Name** - you'll need this!

## Step 3: Create Upload Preset

An upload preset allows unsigned uploads from the browser:

1. In Cloudinary dashboard, go to **Settings** (gear icon) → **Upload**
2. Scroll down to **Upload presets**
3. Click **Add upload preset**
4. Configure the preset:
   - **Preset name**: `mother-birds` (or any name you prefer)
   - **Signing Mode**: Select **Unsigned**
   - **Folder**: `mother-birds-products` (optional - organizes your uploads)
   - **Access Mode**: `public`
   - **Unique filename**: Enable (recommended)
5. Click **Save**

## Step 4: Configure Environment Variables

Update your `.env.local` file:

```env
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=mother-birds
```

**Example:**

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dxyz123abc
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=mother-birds
```

## Step 5: Restart Development Server

After updating `.env.local`, restart your dev server:

```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

## Step 6: Test Image Upload

1. Go to admin dashboard: `http://localhost:3001/admin/products/add`
2. Click the upload area
3. Select an image
4. Wait for upload to complete
5. The image URL should be automatically populated

## How It Works

### Upload Flow

1. User selects image in browser
2. Image is uploaded directly to Cloudinary (client-side)
3. Cloudinary returns secure URL
4. URL is saved to Supabase database
5. Images display from Cloudinary CDN

### Benefits

✅ **Fast CDN delivery** - Images served from global CDN
✅ **Automatic optimization** - Cloudinary optimizes images
✅ **No server load** - Direct browser upload
✅ **Scalable** - Unlimited storage (on paid plans)
✅ **Secure URLs** - HTTPS by default

## Image Upload Features

### Supported Formats

- PNG
- JPG/JPEG
- WEBP
- GIF
- SVG

### File Size Limit

- Maximum: **5MB** per image
- Can be adjusted in `components/ImageUpload.tsx`

### Automatic Features

- **Image optimization** - Cloudinary auto-optimizes
- **Format conversion** - Converts to best format
- **Responsive delivery** - Different sizes for different devices
- **Lazy loading** - Built-in Next.js Image component

## Cloudinary Dashboard Features

### Media Library

- View all uploaded images
- Organize in folders
- Search and filter
- Bulk operations
- Delete images

### Transformations

You can transform images via URL parameters:

```
https://res.cloudinary.com/your_cloud/image/upload/w_500,h_500,c_fill/v1234567890/image.jpg
```

**Common transformations:**

- `w_500` - Width 500px
- `h_500` - Height 500px
- `c_fill` - Crop mode: fill
- `q_auto` - Auto quality
- `f_auto` - Auto format

## Troubleshooting

### Upload Fails

**Error: "Upload failed"**

✅ **Check**:

1. Cloud name is correct in `.env.local`
2. Upload preset name matches
3. Upload preset is set to **Unsigned**
4. Internet connection is active

### Images Not Displaying

**Error: Image URL not loading**

✅ **Check**:

1. URL is valid and starts with `https://res.cloudinary.com/`
2. Image exists in Cloudinary Media Library
3. No CORS issues (shouldn't occur with Cloudinary)

### Environment Variables Not Working

✅ **Solution**:

1. Ensure variable names start with `NEXT_PUBLIC_`
2. Restart dev server after changes
3. Clear browser cache

## Security Best Practices

### Upload Presets

- ✅ Use **unsigned** presets for client uploads
- ✅ Set folder restrictions
- ✅ Enable **unique filename** to prevent overwrites
- ✅ Set file size limits

### Access Control

- Keep API Secret private (never expose in frontend)
- Use upload presets instead of direct API key uploads
- Enable access control if needed

## Free Tier Limits

Cloudinary Free Plan includes:

- **25 credits/month** (1 credit = 1,000 transformations)
- **25GB storage**
- **25GB bandwidth/month**
- Unlimited upload requests

For most small to medium websites, this is sufficient!

## Upgrade Options

If you need more:

- **Plus Plan**: $99/month - 100GB storage, 100GB bandwidth
- **Advanced Plan**: Custom pricing
- Pay-as-you-go options available

## Next Steps

### Optional Enhancements

1. **Add Image Cropping**

   - Install `react-image-crop`
   - Allow users to crop before upload

2. **Multiple Images**

   - Add gallery support
   - Upload multiple product images

3. **Image Transformations**

   - Generate thumbnails
   - Create responsive versions
   - Auto-optimize for web

4. **Video Support**
   - Upload product videos
   - Video transformation

## Support

- **Cloudinary Docs**: [https://cloudinary.com/documentation](https://cloudinary.com/documentation)
- **Upload Widget**: [https://cloudinary.com/documentation/upload_widget](https://cloudinary.com/documentation/upload_widget)
- **Next.js Integration**: [https://cloudinary.com/documentation/react_integration](https://cloudinary.com/documentation/react_integration)

---

**Last Updated:** 2024-11-03
**Version:** 1.0.0
