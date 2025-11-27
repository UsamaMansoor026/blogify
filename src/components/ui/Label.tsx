interface LabelProps {
  htmlFor: string;
  className?: string;
  labelText: string;
}

const Label = ({ htmlFor, className, labelText }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className ?? ""} text-sm text-secondary`}
    >
      {labelText}
    </label>
  );
};

export default Label;
