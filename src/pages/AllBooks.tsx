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
import { IBook } from "../types/interface";

export default function AllBooks() {
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

  return (
    <section className="page_main ">
      <h2 className="section_title mt-16">All Books</h2>
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
        {books?.map((book: IBook) => (
          <BookCardWithImg key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
}
