import { Link } from "react-router-dom";
import { blogsData, type BlogInterface } from "../assets";
import SearchBox from "../components/SearchBox";
import AuthorDetails from "../components/ui/AuthorDetails";

const Home = () => {
  return (
    <section className="global-padding pt-32">
      {/* Search Box */}
      <SearchBox />

      {/* Blogs Dummy Data */}
      <div className="custom-grid-container grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10 my-6">
        {blogsData.map((blog: BlogInterface) => (
          <article
            key={blog.id}
            className="border border-card bg-card rounded-lg relative overflow-hidden"
          >
            {/* Category */}
            <span className="absolute right-2 top-2 shadow-2xs shadow-primary bg-card px-3 py-1.5 rounded-xl text-xs z-10">
              {blog.category}
            </span>

            {/* Thumbnail */}
            <div className="overflow-hidden">
              <img
                src={blog.thumbnail}
                alt={blog.slug}
                className="duration-300 hover:scale-110 w-full h-full"
              />
            </div>

            {/* Blog content */}
            <div className="flex flex-col p-3">
              <p className="self-end text-xs mb-3 text-secondary">
                {blog.date}
              </p>
              <h3 className="blog-title text-base font-medium h-16 md:h-14">
                {blog.title}
              </h3>
            </div>

            {/* Author details */}
            <AuthorDetails authorId={blog.authorId} />

            {/* Read more button */}
            <Link
              to={`/post/${blog.id}`}
              className="p-3 mb-2 block text-sm text-blue-500 underline w-fit"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;
