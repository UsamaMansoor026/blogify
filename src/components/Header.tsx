import { Link, useLocation } from "react-router-dom";
import Logo from "./ui/Logo";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import UserProfileIcon from "./UserProfileIcon";

const Header = () => {
  const location = useLocation();
  const [showMobNav, setShowMobNav] = useState(false);

  const trackWindowWidth = () => {
    if (window.innerWidth >= 768) {
      setShowMobNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", trackWindowWidth);
    return () => {
      window.removeEventListener("resize", trackWindowWidth);
    };
  }, []);

  /* Dummy Situation */
  const user = null;

  return (
    <header className="custom-shadow fixed w-full py-4 global-padding flex items-center justify-between z-50 bg-nav">
      <Logo />

      <nav className="flex flex-row-reverse md:flex-row items-center gap-4">
        {/* Links */}
        <ul className="hidden md:flex items-center gap-4">
          <li
            className={`font-medium duration-200 hover:underline ${
              location.pathname === "/" ? "underline" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`font-medium duration-200 hover:underline ${
              location.pathname === "/add-post" ? "underline" : ""
            }`}
          >
            <Link to="/add-post">Add Post</Link>
          </li>
          <li
            className={`font-medium duration-200 hover:underline ${
              location.pathname === "/categories" ? "underline" : ""
            }`}
          >
            <Link to="/categories">Categories</Link>
          </li>
        </ul>

        {/* Mobile Nav Links */}
        {showMobNav && (
          <ul className="flex md:hidden flex-col gap-4 absolute left-0 top-full bg-nav w-full items-start px-5 py-3 text-lg">
            <li
              className={`font-medium duration-200 hover:underline ${
                location.pathname === "/" ? "underline" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`font-medium duration-200 hover:underline ${
                location.pathname === "/add-post" ? "underline" : ""
              }`}
            >
              <Link to="/add-post">Add Post</Link>
            </li>
            <li
              className={`font-medium duration-200 hover:underline ${
                location.pathname === "/categories" ? "underline" : ""
              }`}
            >
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        )}

        {/* Hamburger Menu */}
        <div
          className="block md:hidden"
          onClick={() => setShowMobNav(!showMobNav)}
        >
          {showMobNav ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Login Button */}
        {user ? (
          <UserProfileIcon />
        ) : (
          <Link
            to="/auth/login"
            className="px-8 py-2 bg-accent text-primary font-medium rounded-md duration-200 hover:bg-accent-hover"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
