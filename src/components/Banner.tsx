const Banner = () => {
  return (
    <div className="relative h-[85vh] w-full">
      <img
        src="https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWRpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-[#0c1e51cc]/80">
        <div className="w-3/4 text-center md:w-2/4">
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
            The Beauty of Reading Book
          </h1>
          <p className="mb-12 opacity-80 text-white">
            Reading books benefits both your physical and mental health, and
            those benefits can last a lifetime. They begin in early childhood
            and continue through the senior years. Here’s a brief explanation of
            how reading books can change your brain — and your body — for the
            better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
