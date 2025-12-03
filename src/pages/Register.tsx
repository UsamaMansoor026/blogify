import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import { useState } from "react";

const Register = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <section className="h-screen flex justify-center items-center my-16">
      <form className="max-w-md w-full mx-auto border border-accent px-6 py-4 shadow-xs shadow-accent rounded-sm flex flex-col gap-4">
        <h3 className="text-center text-3xl font-semibold">
          Welcome To Blogify
        </h3>
        <p className="text-center text-sm text-secondary">
          Create your account
        </p>
        <hr className="border border-accent max-w-[200px] w-full mx-auto" />

        {/* Form Fields */}
        {/* Profile Avatar */}
        <div className="flex flex-col gap-1">
          <label htmlFor="avatar_url">
            <div className="mx-auto w-36 h-36 border-2 border-dashed border-accent flex flex-col justify-center items-center cursor-pointer hover:bg-accent-hover/10 duration-200 overflow-hidden rounded-full">
              {file !== null ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="user avatar"
                  className="object-cover object-top"
                />
              ) : (
                <p className="text-center text-xs text-secondary font-extralight">
                  Upload your <br /> profile picture
                </p>
              )}
            </div>
            <input
              type="file"
              name="avatra_url"
              id="avatar_url"
              hidden
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Username */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="username" labelText="Username" />
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="create your username"
          />
        </div>

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
          Already have an account?{" "}
          <Link to="/auth/login" className="underline">
            Login here
          </Link>
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-accent w-full px-10 py-2 rounded-md cursor-pointer duration-200 hover:bg-accent-hover"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
