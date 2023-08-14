const Error = ({ message = "Some Error happen" }: { message?: string }) => {
  return (
    <div className="bg-red-100 p-2 text-center text-red-400">{message}</div>
  );
};

export default Error;
