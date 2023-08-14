/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookCard from "../components/ui/BookCard";
import Error from "../components/ui/Error";
import BookCardLoader from "../components/ui/Loader/BookCardLoader";
import { IBook } from "../redux/Fetaures/AddNewBook/addNewBookSlice";
import { useGetBooksQuery } from "../redux/Fetaures/Book/bookApi";

const Home = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  let content = null;

  if (isLoading) {
    content = (
      <>
        <BookCardLoader />
        <BookCardLoader />
        <BookCardLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error />;
  }
  if (!isLoading && !isError && data?.data.length > 0) {
    content = (
      <>
        {data?.data?.map((book: IBook) => (
          <BookCard key={book?.id} book={book} />
        ))}
      </>
    );
  }
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            {/* <button className={`mhr-filter-btn ${filter.featured === false && "active-filter"}`}
                        onClick={() => dispatch(filterStatus(false))}
                    >All</button>
                    <button className={`mhr-filter-btn ${filter.featured === true && "active-filter"}`}
                        onClick={() => dispatch(filterStatus(true))}
                    >Featured</button> */}
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
};

export default Home;
