import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookCardWithImg from "../components/reuseable/BookCardWithImg";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import {
  clearFilter,
  filter,
  search,
} from "../redux/features/search/searchSlice";
import { useAppSelector } from "../redux/hook";
import { IBook, ISortBy } from "../types/interface";

const AllBooks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { keyword, filterOptions } = useAppSelector((state) => state.search);
  const { data } = useGetAllBooksQuery({
    page: 1,
    limit: 15,
    sortBy: "genre",
    genre: filterOptions.genre,
    searchTerm: keyword.toLocaleLowerCase(),
  });

  const books = data?.data;

  const filterBySearch = (value: string) => {
    dispatch(search(value));
  };

  const debounce = (fn: (value: string) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout | number | undefined;

    return (e: FormEvent) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        fn((e.target as HTMLInputElement).value);
      }, delay);
    };
  };

  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState<ISortBy>("createdAt");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const sortData = (value: ISortBy) => {
    setSortBy(value);
    setIsOpen(false);
  };
  console.log(sortBy);

  return (
    <section className="page_main ">
      <h2 className="section_title mt-16">All Books</h2>
      <div className="text-center flex flex-col items-center justify-center md:justify-between lg:flex-row">
        <div className="flex gap-3 justify-center items-center">
          <input
            type="text"
            placeholder="Search you book....... 📖"
            onChange={debounce((value) => filterBySearch(value), 500)}
            className="input input-bordered input-primary w-[500px] max-w-xs"
          />
          <select
            onChange={(e) => dispatch(filter(e.target.value))}
            className="select border-2 border-slate-500 select-ghost w-full max-w-[150px]"
          >
            <option disabled selected>
              Pick a Genre
            </option>
            <option value="Self-Help">Self-Help</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Academic">Academic</option>
            <option value="Classic">Classic</option>
            <option value="Religion">Religion</option>
            <option value="Adventure">Adventure</option>
          </select>

          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex justify-center w-full px-5 py-3 text-sm font-medium text-white bg-[#0f1729] border border-white border-opacity-60 rounded-md shadow-sm focus:outline-none"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort&nbsp;By
              <svg
                className={`-mr-1 ml-2 h-5 w-5 transition-all duration-300 ${
                  isOpen && "-rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-[#0f1729] ring-1 border border-gray-500 z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {/* Dropdown content */}
                <div className="py-1" role="none">
                  <p
                    className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 hover:text-white"
                    role="menuitem"
                    onClick={() => sortData("createdAt")}
                  >
                    Date
                  </p>
                  <p
                    onClick={() => sortData("genre")}
                    className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 hover:text-white"
                    role="menuitem"
                  >
                    genre
                  </p>
                  <p
                    onClick={() => sortData("publicationDate")}
                    className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 hover:text-white"
                    role="menuitem"
                  >
                    publicationDate
                  </p>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => dispatch(clearFilter())}
            className="btn btn-secondary"
          >
            Clear
          </button>
        </div>
        <button
          onClick={() => navigate("/add-book")}
          className="btn btn-primary btn-wide mt-4 mb-6"
        >
          Add New
        </button>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {books?.map((book: IBook) => (
          <BookCardWithImg key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
};
export default AllBooks;
