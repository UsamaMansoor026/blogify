import { useParams } from "react-router-dom";
import { blogsData, users, type UserInterface } from "../assets";

const fetchAuthorDetails = (authorId: string) => {
  const authorDetail: UserInterface | undefined = users.find(
    (user) => user.id === authorId
  );

  if (authorDetail) {
    return (
      <div className="flex items-center gap-2 py-3">
        <img
          src={authorDetail.avatar_url}
          alt={authorDetail.username}
          className="w-10 h-10 object-cover rounded-full"
        />
        <h2 className="text-secondary">{authorDetail.username}</h2>
      </div>
    );
  }
};

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
      {fetchAuthorDetails(post.authorId)}

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
