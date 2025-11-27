import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";

const Login = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <form className="max-w-md w-full mx-auto border border-accent px-6 py-4 shadow-xs shadow-accent rounded-sm flex flex-col gap-4">
        <h3 className="text-center text-3xl font-semibold">Welcome Back</h3>
        <p className="text-center text-sm text-secondary">
          Login to your account
        </p>
        <hr className="border border-accent max-w-[200px] w-full mx-auto" />

        {/* Form Fields */}
        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" labelText="Email" />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="password" labelText="Password" />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        {/*  */}
        <p className="text-sm">
          Don't have an account?{" "}
          <Link to="/auth/register" className="underline">
            Register here
          </Link>
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-accent w-full px-10 py-2 rounded-md cursor-pointer duration-200 hover:bg-accent-hover"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
