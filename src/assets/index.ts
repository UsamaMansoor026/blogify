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
    content: `
      <h2>The Rise of Artificial Intelligence in 2024</h2>
      <p>
        Artificial Intelligence continues to evolve rapidly, bringing new opportunities
        and challenges. In 2024, companies are focusing more on <strong>ethical AI</strong>,
        automation and smarter decision-making systems.
      </p>

      <h3>Key Trends</h3>
      <ul>
        <li>Generative AI for content and automation.</li>
        <li>AI-assisted healthcare diagnostics.</li>
        <li>Edge AI enabling faster on-device processing.</li>
      </ul>

      <p>
        Businesses adopting AI early will gain a strong competitive advantage.
        As the technology grows, we can expect more seamless integrations
        in daily life.
      </p>
    `,
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
    content: `
      <h2>Blockchain Beyond Cryptocurrency</h2>
      <p>
        Blockchain is no longer limited to Bitcoin. Modern industries are exploring
        how distributed ledger technology can improve transparency and security.
      </p>

      <h3>Popular Use Cases</h3>
      <ol>
        <li><strong>Supply Chain Tracking</strong> – Companies track products from origin to delivery.</li>
        <li><strong>Digital Identity</strong> – Secure identity verification without central authorities.</li>
        <li><strong>Healthcare</strong> – Safe exchange of medical records.</li>
      </ol>

      <p>
        As adoption grows, blockchain will support decentralized apps,
        enterprise tools and more secure transactions across industries.
      </p>
    `,
    category: "Technology",
    title: "Blockchain Beyond Cryptocurrency: Emerging Applications",
    slug: "blockchain-beyond-cryptocurrency-emerging-applications",
    date: "2024-02-10",
    published: true,
    totalLikes: 2,
    likes: ["user-1", "user-2"],
  },
];
