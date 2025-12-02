import avatar1 from "./avatar15.jpg";
import avatar2 from "./avatar4.jpg";

import blogPost1 from "./blog1.jpg";
import blogPost2 from "./blog17.jpg";

export interface UserInterface {
  id: string;
  username: string;
  email: string;
  avatar_url: string;
}

export interface BlogInterface {
  id: string;
  authorId: string;
  thumbnail: string;
  content: string;
  category: string;
  title: string;
  slug: string;
  date: string;
  published: boolean;
  totalLikes: number;
  likes: string[];
}

export const users: UserInterface[] = [
  {
    id: "user-1",
    username: "maan_dev",
    email: "maan@example.com",
    avatar_url: avatar1,
  },
  {
    id: "user-2",
    username: "penny_barber",
    email: "penny@example.com",
    avatar_url: avatar2,
  },
];

export const blogsData: BlogInterface[] = [
  {
    id: "blog1",
    authorId: "user-1",
    thumbnail: blogPost1,
    content:
      "This article explores the latest trends in artificial intelligence for 2024...",
    category: "Technology",
    title: "The Future of AI: Trends to Watch in 2024",
    slug: "the-future-of-ai-trends-to-watch-in-2024",
    date: "2024-01-15",
    published: true,
    totalLikes: 1,
    likes: ["user-1"],
  },
  {
    id: "blog2",
    authorId: "user-2",
    thumbnail: blogPost2,
    content:
      "This article delves into the various applications of blockchain technology beyond cryptocurrencies...",
    category: "Technology",
    title: "Blockchain Beyond Cryptocurrency: Emerging Applications",
    slug: "blockchain-beyond-cryptocurrency-emerging-applications",
    date: "2024-02-10",
    published: true,
    totalLikes: 2,
    likes: ["user-1", "user-2"],
  },
];
