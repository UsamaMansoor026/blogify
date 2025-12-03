import { Link } from "react-router-dom";
import avatar from "../assets/avatar1.jpg";

const UserProfileIcon = () => {
  return (
    <div>
      {/* Avatar Icon */}
      <div className="group relative">
        <button className="peer">
          <img
            src={avatar}
            alt="Username"
            className="w-10 h-10 rounded-full cursor-pointer object-cover"
          />
        </button>

        {/* User Detail, logout and user specific pages */}
        <div className="hidden peer-focus:block group-hover:block absolute -right-6 lg:-right-16 pt-[19px] bg-transparent">
          <ul className="bg-nav p-3">
            <li>
              <h3 className="text-xl font-medium mb-1">penny_barber</h3>
              <p className="text-secondary text-sm">pennyisgreat@gmail.com</p>
            </li>

            <hr className="mt-2 mb-4" />

            {/* User specific pages */}
            <li className="mb-2">
              <Link to="/" className="underline">
                My Posts
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="underline">
                Liked Posts
              </Link>
            </li>
            <li className="mb-2">
              <button
                type="button"
                className="bg-accent py-2 w-full duration-200 hover:bg-accent-hover cursor-pointer hover:shadow-md hover:shadow-accent-hover"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfileIcon;
