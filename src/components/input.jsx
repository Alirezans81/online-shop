const Input = ({ name, value, onChange, type, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="w-100 px-4 py-2 inputs mt-5 text-align-right"
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
