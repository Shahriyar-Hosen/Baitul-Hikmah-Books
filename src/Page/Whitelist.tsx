/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BookCard from "../components/ui/BookCard";
import Error from "../components/ui/Error";
import BookCardLoader from "../components/ui/Loader/BookCardLoader";
import useProfile from "../hooks/useProfile";
import { useGetWhiteListQuery } from "../redux/Features/Whitelist/whitelistApi";
import { IBook } from "../types";

const Whitelist = () => {
  const { data, isLoading, isError } = useGetWhiteListQuery(undefined);
  const { profile } = useProfile();
  let content = null;

  if (isLoading) {
    content = Array.from(Array(3).keys()).map((el) => (
      <BookCardLoader key={el} />
    ));
  }
  if (!isLoading && isError) {
    content = <Error />;
  }
  if (!isLoading && !isError) {
    content = (
      <>
        {data?.data
          ?.filter((p) => profile?.data.email === p.email)[0]
          ?.data.map((book: IBook) => (
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

          <div className="flex items-center space-x-4"></div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
};

export default Whitelist;
