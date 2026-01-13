export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alex Thompson",
    role: "CEO",
    company: "TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    content:
      "The quality of content on this blog is exceptional. It has become my go-to resource for staying updated with the latest tech trends.",
    rating: 5,
  },
  {
    id: "2",
    name: "Jennifer Lee",
    role: "Product Designer",
    company: "DesignHub",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    content:
      "As a designer, I find the UI/UX articles incredibly insightful. The practical tips have improved my design process significantly.",
    rating: 5,
  },
  {
    id: "3",
    name: "Robert Martinez",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    content:
      "The tutorials are well-structured and easy to follow. I have learned so much from this blog. Highly recommended!",
    rating: 5,
  },
  {
    id: "4",
    name: "Lisa Anderson",
    role: "Tech Lead",
    company: "InnovateLabs",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    content:
      "The depth of technical knowledge shared here is impressive. It has helped our team adopt better development practices.",
    rating: 5,
  },
];
