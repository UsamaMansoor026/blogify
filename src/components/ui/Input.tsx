interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  autoComplete?: boolean;
}

const Input = ({
  id,
  name,
  type,
  placeholder,
  className,
  autoComplete,
}: InputProps) => {
  // Handle file input separately
  if (type === "file") {
    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className={`bg-nav border border-accent text-secondary px-3 py-2 rounded-md focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent w-full block ${
            className ?? ""
          }`}
        >
          <input
            type="file"
            id={id}
            name={name}
            className="cursor-pointer"
            accept="image/png, image/jpeg"
          />
        </label>
      </div>
    );
  }

  // Regular input
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder ? placeholder : "Enter..."}
      autoComplete={autoComplete === false ? "off" : "on"}
      required
      className={`${
        className ?? ""
      } border border-accent text-primary px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-full bg-nav`}
    />
  );
};

export default Input;
