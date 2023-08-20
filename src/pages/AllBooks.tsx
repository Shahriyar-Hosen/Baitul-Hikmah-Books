import { useNavigate } from "react-router-dom";
import BookCard from "../components/reuseable/BookCard";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/interface";
import { useDispatch } from "react-redux";
import {
  clearFilter,
  filter,
  search,
} from "../redux/features/search/searchSlice";
import { useAppSelector } from "../redux/hook";

export default function AllBooks() {
  // const [searchFilter, setSearchFilter] = useState({
  //   keyword: "",
  //   genre: "",
  // });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useGetAllBooksQuery(undefined);
  const { keyword, filterOptions } = useAppSelector((state) => state.search);
  const books = data?.data;

  let bookContent: IBook[] = books;
  bookContent = books
    ?.filter((book: IBook) => {
      if (keyword) {
        return book.title
          .toLocaleLowerCase()
          .includes(keyword.toLocaleLowerCase());
      }
      return book;
    })
    .filter((book: IBook) => {
      if (filterOptions.length) return filterOptions.includes(book.genre);
      return book;
    });

/*   const onSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchFilter((prevFilter) => ({
      ...prevFilter,
      keyword: e.target.value,
    }));
    dispatch(search(searchFilter.keyword));
  };

  const onFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchFilter((prevFilter) => ({ ...prevFilter, genre: e.target.value }));
    dispatch(filter(searchFilter.genre));
  }; */

  return (
    <div className="page_main">
      <h2 className="section_title">All Books</h2>
      <div className="text-center flex flex-col items-center justify-center md:justify-between lg:flex-row">
        <div className="flex gap-3 justify-center items-center">
          <input
            type="text"
            placeholder="Search you book....... 📖"
            onChange={(e) => dispatch(search(e.target.value))}
            className="input input-bordered input-primary w-[500px] max-w-xs"
          />
          <select
            onChange={(e) => dispatch(filter(e.target.value))}
            className="select border-2 border-slate-500 select-ghost w-full max-w-[200px]"
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
        {bookContent?.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
