type CustomImput = {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  id?: string;
  required?: any;
};
const CustomImput = ({
  type,
  name,
  value,
  placeholder,
  id,
  required,
}: CustomImput) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      id={id}
      className="border border-black w-full rounded-lg p-2"
      required={required}
    />
  );
};

export { CustomImput };
