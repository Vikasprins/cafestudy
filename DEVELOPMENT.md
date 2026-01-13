# Development Guide

## Project Architecture

This Next.js blog follows modern best practices with a clean, scalable architecture.

## Directory Structure Explained

### `/app` - Next.js App Router

```
app/
├── layout.tsx          # Root layout with Header/Footer
├── page.tsx           # Home page (/)
├── globals.css        # Global styles and Tailwind
├── about/
│   └── page.tsx      # About page (/about)
├── blog/
│   ├── page.tsx      # Blog listing (/blog)
│   └── [slug]/
│       └── page.tsx  # Dynamic blog post (/blog/[slug])
└── contact/
    └── page.tsx      # Contact page (/contact)
```

### `/components` - Reusable Components

All components are client-side (`'use client'`) for interactivity:

- **Header.tsx**: Navigation with mobile menu
- **Footer.tsx**: Footer with links and social icons
- **BlogCard.tsx**: Reusable blog post card
- **Button.tsx**: Customizable button component
- **Newsletter.tsx**: Newsletter subscription form
- **AuthorCard.tsx**: Author profile card
- **TestimonialCard.tsx**: Testimonial display card

### `/data` - Mock Data

Static TypeScript files with type definitions:

- **blogs.ts**: Blog posts with full content
- **authors.ts**: Author profiles
- **categories.ts**: Blog categories
- **testimonials.ts**: User testimonials

## Key Technologies

### Next.js 14 (App Router)
- Server-side rendering
- Dynamic routing
- Image optimization
- SEO optimization

### TypeScript
- Type safety
- Better IDE support
- Fewer runtime errors

### Tailwind CSS
- Utility-first CSS
- Custom configuration
- Responsive design
- Dark mode ready (optional)

### Framer Motion
- Page animations
- Scroll animations
- Micro-interactions
- Smooth transitions

## Component Patterns

### 1. Client Components
All interactive components use `'use client'` directive:

```tsx
'use client';
import { useState } from 'react';
```

### 2. TypeScript Interfaces
Define types for props:

```tsx
interface BlogCardProps {
  post: BlogPost;
  index?: number;
}
```

### 3. Animation Patterns
Use Framer Motion for animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```

### 4. Responsive Design
Mobile-first approach:

```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Styling System

### Custom Utilities (globals.css)

```css
.glass-card          # Glassmorphism effect
.gradient-text       # Gradient text
.hover-lift          # Lift animation
.btn-primary         # Primary button
.btn-secondary       # Secondary button
```

### Color System

Primary colors are defined in `tailwind.config.ts`:
- primary-50 to primary-900
- Purple gradients
- Semantic colors

## Data Flow

```
Mock Data (data/) → Components → Pages → User
```

1. Data is imported from `/data` files
2. Components receive data as props
3. Pages compose components
4. No external API calls (static data)

## Adding New Features

### Add a New Blog Post

Edit `data/blogs.ts`:

```typescript
{
  id: 'new-id',
  title: 'Your Title',
  slug: 'your-slug',
  excerpt: 'Short description',
  content: 'Full content...',
  coverImage: 'https://...',
  authorId: '1',
  categoryId: '1',
  publishedAt: '2024-03-15',
  readTime: 10,
  featured: false,
  tags: ['Tag1', 'Tag2'],
}
```

### Add a New Page

1. Create folder in `/app`
2. Add `page.tsx` file
3. Export default component
4. Update navigation in Header

### Add a New Component

1. Create file in `/components`
2. Add `'use client'` if interactive
3. Define TypeScript interface
4. Export component

## Performance Tips

### Image Optimization
Always use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
/>
```

### Code Splitting
Next.js automatically code splits by route.

### Animation Performance
Use `will-change` and GPU-accelerated properties:
- transform
- opacity
- filter

## SEO Best Practices

### Meta Tags
Update in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  keywords: 'keyword1, keyword2',
}
```

### Dynamic Meta Tags
Add to individual pages for better SEO.

## Testing Locally

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Check for errors
npm run lint
```

## Deployment Checklist

- [ ] Update metadata in layout.tsx
- [ ] Replace mock data with real content
- [ ] Add real images to public folder
- [ ] Update contact information
- [ ] Test all pages and links
- [ ] Run production build
- [ ] Test performance (Lighthouse)
- [ ] Deploy to hosting platform

## Common Customizations

### Change Logo
Edit `components/Header.tsx`:

```tsx
<div className="text-2xl font-bold">
  YourBrandName
</div>
```

### Update Footer Links
Edit `components/Footer.tsx`

### Modify Hero Section
Edit `app/page.tsx` hero section

### Add Google Analytics
Add script in `app/layout.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

Happy coding! 🎉
