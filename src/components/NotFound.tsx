import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-primary">
      {/* Glowing circle */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 blur-3xl"></div>

        <h1 className="relative text-[120px] font-extrabold leading-none select-none text-accent text-shadow-md text-shadow-card">
          404
        </h1>
      </div>

      <p className="mt-6 text-xl text-secondary max-w-md">
        Looks like you've drifted into the void. This page couldn’t be found.
      </p>

      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-accent rounded-lg text-lg font-medium hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl"
      >
        Take me home
      </Link>
    </div>
  );
}
