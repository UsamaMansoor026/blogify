import { useParams } from "react-router-dom";
import { blogsData } from "../assets";
import AuthorDetails from "../components/ui/AuthorDetails";

const PostDetails = () => {
  window.scrollTo(0, 0);
  const { postId } = useParams<{ postId: string }>();

  const post = blogsData.find((blog) => blog.id === postId);

  if (!post) {
    return (
      <section className="global-padding pt-32">
        <p>No post found</p>
      </section>
    );
  }

  return (
    <section className="px-4 pt-32 mb-10 max-w-2xl mx-auto">
      {/* Author Detail */}
      <AuthorDetails authorId={post.authorId} />

      {/* Thumbnail */}
      <div className="overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.slug}
          className="object-cover aspect-video"
        />
      </div>

      {/* Content */}
      <div className="mt-6">
        <p className="text-sm text-secondary mb-6">{post.date}</p>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-base leading-7">{post.content}</p>
      </div>
    </section>
  );
};

export default PostDetails;
