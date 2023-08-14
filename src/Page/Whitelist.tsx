/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BookCardLoader from "../components/ui/Loader/BookCardLoader";
import { useGetWhiteListQuery } from "../redux/Fetaures/Whitelist/whitelistApi";
import Error from "../components/ui/Error";
import useProfile from "../hooks/useProfile";
import { IBook } from "../redux/Fetaures/AddNewBook/Features";
import BookCard from "../components/ui/BookCard";

const Whitelist = () => {
  const { data, isLoading, isError } = useGetWhiteListQuery(undefined);
  const { profile } = useProfile();
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
