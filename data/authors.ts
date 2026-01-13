export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Tech enthusiast and software developer with a passion for web development and UI/UX design.",
    role: "Senior Developer",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Full-stack developer and tech blogger sharing insights on modern web technologies.",
    role: "Tech Writer",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "3",
    name: "Emily Davis",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Design systems specialist and frontend architect focused on creating beautiful user experiences.",
    role: "UI/UX Designer",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "4",
    name: "David Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "DevOps engineer and cloud architecture enthusiast.",
    role: "DevOps Engineer",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
];
