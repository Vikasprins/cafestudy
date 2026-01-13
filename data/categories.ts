export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  postCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    description: "Latest trends and innovations in tech",
    icon: "Laptop",
    color: "from-blue-500 to-cyan-500",
    postCount: 24,
  },
  {
    id: "2",
    name: "Design",
    slug: "design",
    description: "UI/UX design principles and inspiration",
    icon: "Palette",
    color: "from-purple-500 to-pink-500",
    postCount: 18,
  },
  {
    id: "3",
    name: "Development",
    slug: "development",
    description: "Web development tutorials and tips",
    icon: "Code",
    color: "from-green-500 to-emerald-500",
    postCount: 32,
  },
  {
    id: "4",
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Work-life balance and productivity",
    icon: "Coffee",
    color: "from-orange-500 to-red-500",
    postCount: 15,
  },
  {
    id: "5",
    name: "Business",
    slug: "business",
    description: "Entrepreneurship and business insights",
    icon: "Briefcase",
    color: "from-indigo-500 to-blue-500",
    postCount: 21,
  },
  {
    id: "6",
    name: "Artificial Intelligence",
    slug: "ai",
    description: "AI and machine learning discoveries",
    icon: "Brain",
    color: "from-violet-500 to-purple-500",
    postCount: 12,
  },
];
