import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-[28px] uppercase font-extrabold duration-100 hover:text-accent hover:text-shadow-2xs hover:text-shadow-card"
    >
      Blogify
    </Link>
  );
};

export default Logo;
