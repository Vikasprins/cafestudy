# Quick Start Guide

## Installation & Setup

Follow these simple steps to get your blog website up and running:

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

### Step 2: Start Development Server

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

### Step 3: Build for Production

When you're ready to deploy:

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Features Checklist

✅ **Home Page**

- Animated hero section
- Featured posts
- Categories grid
- Latest posts
- Newsletter subscription
- Testimonials

✅ **Blog Listing**

- Search functionality
- Category filters
- Pagination
- Responsive grid

✅ **Blog Details**

- Reading progress bar
- Social sharing
- Author section
- Related posts

✅ **About Page**

- Company story
- Team profiles
- Core values

✅ **Contact Page**

- Contact form with validation
- Contact information
- Map placeholder

## Customization Tips

### 1. Update Mock Data

Edit files in the `data/` folder:

- `blogs.ts` - Add your blog posts
- `authors.ts` - Add author profiles
- `categories.ts` - Customize categories
- `testimonials.ts` - Add testimonials

### 2. Change Colors

Edit `tailwind.config.ts` to change the color scheme.

### 3. Modify Content

All pages are in the `app/` directory. Edit `.tsx` files to update content.

### 4. Add Images

Place images in the `public/` folder and reference them as `/image-name.jpg`

## Common Issues & Solutions

**Issue**: Port 3000 already in use
**Solution**: Use a different port: `npm run dev -- -p 3001`

**Issue**: Build errors
**Solution**: Delete `.next` folder and `node_modules`, then run `npm install` again

**Issue**: Styling not loading
**Solution**: Make sure Tailwind is configured correctly and restart dev server

## Next Steps

1. Replace mock data with your actual content
2. Add your own images to the public folder
3. Customize colors and styling
4. Deploy to Vercel or your preferred hosting platform

## Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Visit [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Review [Framer Motion Docs](https://www.framer.com/motion/)

Happy blogging! 🚀
