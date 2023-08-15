/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookCard from "../components/ui/BookCard";
import Error from "../components/ui/Error";
import BookCardLoader from "../components/ui/Loader/BookCardLoader";
import { useGetBooksQuery } from "../redux/Features/Book/bookApi";
import { IBook } from "../types";

export const Books = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  let content = null;

  (isLoading &&
    (content = Array.from(Array(3).keys()).map((el) => (
      <BookCardLoader key={el} />
    )))) ||
    (!isLoading && isError && (content = <Error />)) ||
    (!isLoading &&
      !isError &&
      data?.data?.length > 0 &&
      (content = data?.data?.map((book: IBook, i: number) => (
        <BookCard key={i} book={book} />
      ))));

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
};
