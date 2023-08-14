const BookCardLoader = () => {
  return (
    <div className="book-card">
      <div className="h-[240px] w-[170px] bg-slate-200 "></div>
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="h-[20px] w-[70px] rounded bg-slate-200"></span>
          <div className="text-gray-500 flex space-x-2">
            <div className="h-[20px] w-[20px] rounded bg-slate-200"></div>
            <div className="h-[20px] w-[20px] rounded bg-slate-200"></div>
          </div>
        </div>

        <div className="space-y-2 mt-4 h-full">
          <div className="h-[30px] w-[180px] rounded bg-slate-200"></div>
          <div className="h-[30px] w-[150px] rounded bg-slate-200"></div>
          <div className="h-[20px] w-[100px] rounded bg-slate-200"></div>
          <div className="mhr-stars gap-2">
            <div className="h-[15px] w-[15px] rounded bg-slate-200"></div>

            <div className="h-[15px] w-[15px] rounded bg-slate-200"></div>

            <div className="h-[15px] w-[15px] rounded bg-slate-200"></div>
          </div>
          <div className="h-[20px] w-[80px] rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

export default BookCardLoader;
