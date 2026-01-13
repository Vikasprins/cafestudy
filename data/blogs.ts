export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  authorId: string;
  categoryId: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-web-development-2024",
    excerpt:
      "Explore the cutting-edge technologies and methodologies shaping the future of web development.",
    content: `
The Future of Web Development: Trends to Watch in 2024

The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we move through 2024, several trends are becoming increasingly prominent, reshaping how we build and interact with web applications.

Server Components Revolution

React Server Components have fundamentally changed how we think about building web applications. By allowing components to render on the server, we can significantly reduce the JavaScript bundle sent to the client, resulting in faster load times and improved performance.

AI-Powered Development

Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. From AI-assisted code completion to automated testing, these tools are making developers more productive than ever.

Edge Computing

Moving computation closer to users through edge computing is becoming the standard for high-performance applications. This approach reduces latency and provides a better user experience, especially for globally distributed applications.

The Rise of TypeScript

TypeScript has become the de facto standard for building large-scale JavaScript applications. Its type safety and excellent tooling support make it an essential skill for modern web developers.

Conclusion

The future of web development is exciting and full of possibilities. By staying informed about these trends and continuously learning, developers can build better, faster, and more efficient web applications.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    authorId: "1",
    categoryId: "3",
    publishedAt: "2024-01-15",
    readTime: 8,
    featured: true,
    tags: ["Web Development", "React", "TypeScript", "AI"],
  },
  {
    id: "2",
    title: "Mastering CSS Grid: A Complete Guide",
    slug: "mastering-css-grid-guide",
    excerpt:
      "Learn how to create complex, responsive layouts with CSS Grid in this comprehensive guide.",
    content: `
Mastering CSS Grid: A Complete Guide

CSS Grid has revolutionized the way we create layouts on the web. This powerful layout system allows developers to create complex, two-dimensional layouts with ease.

Understanding the Basics

CSS Grid introduces a new way of thinking about layouts. Instead of thinking in terms of rows OR columns, Grid allows you to work with both simultaneously.

Key Concepts

Grid Container and Grid Items form the foundation of any Grid layout. By defining a container as a grid, all its direct children automatically become grid items.

Real-World Applications

From magazine-style layouts to dashboard interfaces, CSS Grid excels at creating structured, responsive designs that adapt beautifully to different screen sizes.

Best Practices

Always consider browser support, use named grid lines for better maintainability, and combine Grid with Flexbox for optimal results.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200",
    authorId: "3",
    categoryId: "2",
    publishedAt: "2024-01-20",
    readTime: 10,
    featured: true,
    tags: ["CSS", "Design", "Layout", "Frontend"],
  },
  {
    id: "3",
    title: "Building Scalable Applications with Next.js",
    slug: "building-scalable-nextjs-applications",
    excerpt:
      "Discover best practices for architecting and building scalable applications using Next.js.",
    content: `
Building Scalable Applications with Next.js

Next.js has become the go-to framework for building production-ready React applications. Its powerful features and excellent developer experience make it ideal for projects of any size.

Why Next.js?

The framework provides everything you need out of the box: routing, server-side rendering, static site generation, and API routes—all optimized for performance.

Architecture Patterns

Implementing clean architecture patterns in Next.js applications ensures maintainability and scalability as your project grows.

Performance Optimization

From image optimization to code splitting, Next.js provides numerous tools to keep your application fast and efficient.

Deployment Strategies

Learn about different deployment strategies and how to choose the right one for your application's needs.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
    authorId: "2",
    categoryId: "3",
    publishedAt: "2024-01-25",
    readTime: 12,
    featured: true,
    tags: ["Next.js", "React", "Web Development", "Performance"],
  },
  {
    id: "4",
    title: "The Art of Minimalist UI Design",
    slug: "art-of-minimalist-ui-design",
    excerpt:
      "Explore the principles and techniques behind creating beautiful, minimalist user interfaces.",
    content: `
The Art of Minimalist UI Design

Minimalism in UI design is more than just removing elements—it's about finding the perfect balance between form and function.

Core Principles

White space, typography, and intentional color use are the foundation of minimalist design. Each element should serve a purpose.

User Experience

Minimalist design enhances user experience by reducing cognitive load and making interfaces more intuitive to navigate.

Case Studies

Examining successful minimalist designs reveals common patterns and techniques that contribute to their effectiveness.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
    authorId: "3",
    categoryId: "2",
    publishedAt: "2024-02-01",
    readTime: 7,
    featured: false,
    tags: ["Design", "UI/UX", "Minimalism"],
  },
  {
    id: "5",
    title: "Understanding React Server Components",
    slug: "understanding-react-server-components",
    excerpt:
      "A deep dive into React Server Components and how they revolutionize React development.",
    content: `
Understanding React Server Components

React Server Components represent a paradigm shift in how we build React applications, offering improved performance and developer experience.

What Are Server Components?

Server Components run exclusively on the server, reducing the amount of JavaScript sent to the client and improving initial page load times.

Benefits

From automatic code splitting to direct database access, Server Components offer numerous advantages for modern web applications.

Implementation

Learn how to implement Server Components in your Next.js applications and the best practices to follow.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
    authorId: "1",
    categoryId: "3",
    publishedAt: "2024-02-05",
    readTime: 9,
    featured: false,
    tags: ["React", "Server Components", "Next.js"],
  },
  {
    id: "6",
    title: "Productivity Hacks for Developers",
    slug: "productivity-hacks-developers",
    excerpt:
      "Boost your productivity with these proven techniques and tools used by top developers.",
    content: `
Productivity Hacks for Developers

Maximizing productivity is essential in the fast-paced world of software development. Here are proven strategies to help you work smarter.

Time Management

The Pomodoro Technique and time blocking can significantly improve focus and reduce burnout.

Tool Optimization

Mastering your IDE, using keyboard shortcuts, and automating repetitive tasks can save hours each week.

Mental Health

Taking regular breaks and maintaining work-life balance are crucial for sustained productivity.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200",
    authorId: "2",
    categoryId: "4",
    publishedAt: "2024-02-10",
    readTime: 6,
    featured: false,
    tags: ["Productivity", "Lifestyle", "Tips"],
  },
  {
    id: "7",
    title: "Introduction to Machine Learning for Web Developers",
    slug: "machine-learning-web-developers",
    excerpt:
      "Get started with machine learning and learn how to integrate AI into your web applications.",
    content: `
Introduction to Machine Learning for Web Developers

Machine learning is no longer exclusive to data scientists. Web developers can now integrate powerful ML capabilities into their applications.

Getting Started

TensorFlow.js and other browser-based ML libraries make it easy to add intelligent features to web applications.

Common Use Cases

From image recognition to natural language processing, ML can enhance user experiences in countless ways.

Practical Implementation

Learn how to implement basic ML models in your web applications without extensive data science knowledge.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200",
    authorId: "1",
    categoryId: "6",
    publishedAt: "2024-02-15",
    readTime: 11,
    featured: false,
    tags: ["AI", "Machine Learning", "Web Development"],
  },
  {
    id: "8",
    title: "Building Your Personal Brand as a Developer",
    slug: "building-personal-brand-developer",
    excerpt:
      "Learn how to establish and grow your personal brand in the competitive tech industry.",
    content: `
Building Your Personal Brand as a Developer

In today's competitive tech landscape, having a strong personal brand can open doors to new opportunities and career growth.

Why Personal Branding Matters

Your personal brand is how others perceive you professionally. It can be the difference between being just another developer and being a sought-after expert.

Content Creation

Writing blog posts, creating tutorials, and sharing knowledge on social media establish you as an authority in your field.

Networking

Building genuine connections and contributing to the community are essential aspects of personal branding.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    authorId: "4",
    categoryId: "5",
    publishedAt: "2024-02-20",
    readTime: 8,
    featured: false,
    tags: ["Career", "Branding", "Business"],
  },
  {
    id: "9",
    title: "Advanced TypeScript Patterns",
    slug: "advanced-typescript-patterns",
    excerpt:
      "Master advanced TypeScript patterns and techniques to write more robust and maintainable code.",
    content: `
Advanced TypeScript Patterns

TypeScript's type system is incredibly powerful. Understanding advanced patterns can help you write safer, more maintainable code.

Generic Constraints

Learn how to use generic constraints to create flexible yet type-safe APIs.

Conditional Types

Conditional types enable complex type transformations that adapt based on input types.

Utility Types

Master built-in utility types and learn how to create your own custom utilities.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200",
    authorId: "2",
    categoryId: "3",
    publishedAt: "2024-02-25",
    readTime: 13,
    featured: false,
    tags: ["TypeScript", "Programming", "Best Practices"],
  },
  {
    id: "10",
    title: "The Psychology of Color in Web Design",
    slug: "psychology-color-web-design",
    excerpt:
      "Understand how color choices impact user behavior and emotions in web design.",
    content: `
The Psychology of Color in Web Design

Color is one of the most powerful tools in a designer's arsenal, capable of evoking emotions and influencing user behavior.

Color Theory Basics

Understanding the color wheel and color relationships is fundamental to creating harmonious designs.

Emotional Impact

Different colors evoke different emotions and associations, which can be leveraged to create desired user experiences.

Practical Application

Learn how to choose color palettes that align with your brand and enhance user engagement.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=1200",
    authorId: "3",
    categoryId: "2",
    publishedAt: "2024-03-01",
    readTime: 7,
    featured: false,
    tags: ["Design", "Color Theory", "Psychology"],
  },
  {
    id: "11",
    title: "Microservices Architecture: Pros and Cons",
    slug: "microservices-architecture-pros-cons",
    excerpt:
      "Explore the benefits and challenges of implementing microservices architecture.",
    content: `
Microservices Architecture: Pros and Cons

Microservices have become increasingly popular, but they're not without challenges. Understanding both sides is crucial for making informed decisions.

Advantages

Scalability, technology flexibility, and independent deployment are among the key benefits of microservices.

Challenges

Increased complexity, distributed system challenges, and operational overhead require careful consideration.

When to Use Microservices

Not every project needs microservices. Learn when this architecture pattern makes sense.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
    authorId: "4",
    categoryId: "3",
    publishedAt: "2024-03-05",
    readTime: 10,
    featured: false,
    tags: ["Architecture", "Microservices", "Backend"],
  },
  {
    id: "12",
    title: "Accessibility Best Practices for Modern Web Apps",
    slug: "accessibility-best-practices",
    excerpt:
      "Learn how to make your web applications accessible to everyone, regardless of their abilities.",
    content: `
Accessibility Best Practices for Modern Web Apps

Creating accessible web applications isn't just the right thing to do—it's essential for reaching the widest possible audience.

WCAG Guidelines

Understanding and implementing WCAG guidelines ensures your applications are usable by everyone.

Keyboard Navigation

Many users rely on keyboard navigation. Ensuring your app works without a mouse is crucial.

Screen Reader Support

Proper semantic HTML and ARIA attributes make your content accessible to screen reader users.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200",
    authorId: "3",
    categoryId: "3",
    publishedAt: "2024-03-10",
    readTime: 9,
    featured: false,
    tags: ["Accessibility", "Web Development", "UX"],
  },
];
