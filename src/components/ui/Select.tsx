interface SelectProps {
  name: string;
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Select = ({ name, id, className, children }: SelectProps) => {
  return (
    <select
      name={name}
      id={id}
      className={`${
        className ?? ""
      } border border-accent bg-nav text-primary px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-full cursor-pointer`}
    >
      {children}
    </select>
  );
};

export default Select;
