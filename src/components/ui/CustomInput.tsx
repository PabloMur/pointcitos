type CustomImput = {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  id?: string;
};
const CustomImput = ({ type, name, value, placeholder, id }: CustomImput) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      id={id}
      className="border w-full rounded-lg p-2"
    />
  );
};

export { CustomImput };
