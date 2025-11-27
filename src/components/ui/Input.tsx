interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
}
const Input = ({ id, name, type, placeholder, className }: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={`${placeholder ? placeholder : "Enter..."}`}
      required
      className={`${
        className ?? ""
      } border border-accent text-primary px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-full`}
    />
  );
};

export default Input;
