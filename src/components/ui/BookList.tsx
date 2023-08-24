import { useNavigate } from "react-router-dom";
import { banner } from "../../assets";
import { useGetAllBooksQuery } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/interface";
import BookCardWithImg from "../reuseable/BookCardWithImg";
import Loading from "../reuseable/Loading";
import { Button } from "./button";

const BookList = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const navigate = useNavigate();

  if (isLoading) return <Loading />;

  console.log(data?.data);

  return (
    <div className="_section">
      <div className="flex justify-between items-center h-[calc(100vh-80px)] mx-auto px-10 xl:px-20">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            Read Your <br /> Favorite Books
          </h1>
          <p className="text-secondary font-semibold text-xl">
            From <span className="text-violet-600">Baitul Hikmah</span>
          </p>
          <div className="text-primary mt-20">
            <p>
              Baitul Hikmah is one of the biggest online book’s libraries in
              Bangladesh.
            </p>
            <p>We’ve got a large eBooks collection for all of you.</p>
            <p>Visit our site regularly to read your desired all Books.</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="w-6/12">
          <img src={banner} alt="banner" />
        </div>
      </div>

      <h2 className="section_title">Recent Books</h2>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {data?.data?.slice(0, 10)?.map((book: IBook) => (
          <BookCardWithImg book={book} />
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          onClick={() => navigate("/all-books")}
          className="btn btn-secondary"
        >
          View All Books
        </button>
      </div>
    </div>
  );
};
export default BookList;
