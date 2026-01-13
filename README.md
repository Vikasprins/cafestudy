# ModernBlog - Next.js Blog Website

A modern, fully responsive blog website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with glassmorphism cards and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO Friendly**: Built with Next.js for optimal SEO performance
- **Dynamic Routing**: Blog posts with dynamic slugs
- **Reading Progress Bar**: Track reading progress on blog posts
- **Search & Filter**: Search articles and filter by categories
- **Pagination**: Clean pagination for blog listings
- **Newsletter Subscription**: Email subscription component
- **Social Sharing**: Share posts on Facebook, Twitter, LinkedIn
- **Smooth Animations**: Page transitions and scroll animations using Framer Motion
- **Mock Data**: Pre-populated with sample blog posts, authors, and categories

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
blogweb/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AuthorCard.tsx
│   ├── BlogCard.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Newsletter.tsx
│   └── TestimonialCard.tsx
├── data/
│   ├── authors.ts
│   ├── blogs.ts
│   ├── categories.ts
│   └── testimonials.ts
├── public/
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**:

   ```bash
   cd blogweb
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

### Home Page (`/`)

- Animated hero section with gradient background
- Featured blog posts
- Category grid with icons
- Latest posts section
- Newsletter subscription
- Testimonials carousel

### Blog Listing Page (`/blog`)

- Search functionality
- Category filters
- Responsive blog card grid
- Pagination
- Smooth hover animations

### Blog Detail Page (`/blog/[slug]`)

- Reading progress indicator
- Large hero image
- Author profile section
- Social share buttons
- Related posts
- Animated content sections

### About Page (`/about`)

- Company story
- Team members
- Core values
- Statistics

### Contact Page (`/contact`)

- Animated contact form
- Contact information cards
- Map placeholder
- Form validation

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Customize primary color shades
  },
}
```

### Mock Data

Update mock data in the `data/` directory:

- `blogs.ts` - Blog posts
- `authors.ts` - Author profiles
- `categories.ts` - Blog categories
- `testimonials.ts` - User testimonials

### Styling

Global styles are in `app/globals.css`. Custom utility classes:

- `.glass-card` - Glassmorphism effect
- `.gradient-text` - Gradient text effect
- `.hover-lift` - Lift on hover animation
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style

## 🔧 Building for Production

```bash
npm run build
npm run start
```

This will create an optimized production build and start the production server.

## 📦 Deployment

This project can be deployed to:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any hosting platform that supports Next.js

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 🎯 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized fonts with next/font
- CSS optimization with Tailwind
- Static generation for better performance

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, email hello@modernblog.com or open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
