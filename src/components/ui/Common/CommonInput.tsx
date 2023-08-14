interface ICommonInput {
  label?: string;
  type: string;
  placeholder: string;
  handleOnChange: (e: string) => void;
  value?: string;
}

const CommonInput = ({
  placeholder,
  type,
  label,
  handleOnChange,
  value,
}: ICommonInput) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        onChange={(e) => handleOnChange(e.target.value)}
        type={type}
        value={value}
        className="w-full px-3 py-2 text-gray-700 border border-gray-400 rounded leading-tight focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CommonInput;
