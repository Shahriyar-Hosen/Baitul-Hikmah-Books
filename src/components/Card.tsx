import {
  useAddBookWishlistMutation,
  useAddFinishedBookMutation,
  useAddPlanToReadBookMutation,
  useGetBookWishlistQuery,
  useGetFinishedBooksQuery,
  useGetPlanToReadBooksQuery,
} from '@/redux/api/bookApi';
import { userInfoFromLocalstorage } from '@/utils/utils';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Card = ({ book }: any) => {
  const user = userInfoFromLocalstorage;
  const [addBookWishlist, { data: wishData, isSuccess }] =
    useAddBookWishlistMutation();

  const [
    addPlanToReadBook,
    { data: planToReadData, isSuccess: isPlanSuccess },
  ] = useAddPlanToReadBookMutation();

  const [
    addFinishedBook,
    { data: finishedData, isSuccess: isFinishedSuccess },
  ] = useAddFinishedBookMutation();

  const { data: wishlist } = useGetBookWishlistQuery(undefined);
  const { data: planToReadBooks } = useGetPlanToReadBooksQuery(undefined);
  const { data: finishedBooks } = useGetFinishedBooksQuery(undefined);

  const { title, author, publication, imageUrl, genre, _id: id } = book;

  // added in wishlist

  useEffect(() => {
    if (isSuccess) {
      toast.success(wishData?.message);
    }
  }, [isSuccess]);
  const handleWishlist = () => {
    if (user) {
      addBookWishlist({
        book,
        bookId: id,
        userEmail: user?.email,
      });
    } else {
      return toast.error('You are unauthorized,Please login your first!');
    }
  };

  // plan to read book

  useEffect(() => {
    if (isPlanSuccess) {
      toast.success(planToReadData?.message);
    }
  }, [isPlanSuccess]);

  const handlePlaneToReadBook = (book: any) => {
    if (user) {
      addPlanToReadBook({
        book,
        bookId: id,
        userEmail: user?.email,
      });
    } else {
      return toast.error('You are unauthorized,Please login your first!');
    }
  };

  // Finished book

  useEffect(() => {
    if (isFinishedSuccess) {
      toast.success(finishedData?.message);
    }
  }, [isFinishedSuccess]);

  const handleFinishedBook = (book: any) => {
    if (user) {
      addFinishedBook({
        book,
        bookId: id,
        userEmail: user?.email,
      });
    } else {
      return toast.error('You are unauthorized,Please login your first!');
    }
  };
  return (
    <div>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border h-auto">
        <div className="relative flex justify-center items-center m-0 bg-transparent  text-gray-700 shadow-none rounded-t-lg h-48 border rounded p-2">
          <img
            src={imageUrl ? imageUrl : 'https://i.ibb.co/CtRJv8S/book2.jpg'}
            alt="ui/ux review check "
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col gap-3 absolute right-3 top-3">
            <button
              onClick={() => handleWishlist()}
              className="bg-red-200 p-2 rounded-full"
            >
              {wishlist?.data?.data?.find(
                (x: any) => x?.bookId === book?._id
              ) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    id="mainIconPathAttribute"
                    fill="#ff006a"
                    stroke-width="0"
                    stroke="#ff0000"
                  ></path>{' '}
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                  fill="#ff006a"
                >
                  {' '}
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    id="mainIconPathAttribute"
                  ></path>{' '}
                </svg>
              )}
            </button>
            <Link
              to={`/book/${book._id}`}
              className="bg-gray-300 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {' '}
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                  id="mainIconPathAttribute"
                ></path>{' '}
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                  id="mainIconPathAttribute"
                ></path>{' '}
              </svg>
            </Link>
          </div>
        </div>
        <div className="px-2 pb-4">
          <span className="font-semibold capitalize text-sm text-gray-500">
            {genre}
          </span>
          <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-3 capitalize">
            {title?.length > 10 ? `${title.slice(0, 10)}...` : title}
          </h4>
          <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
            Author Name :{' '}
            {author?.length > 10 ? `${author.slice(0, 10)}...` : title}
          </p>
          <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
            Publication Date : {publication}
          </p>

          <div className="mt-3 flex flex-col justify-between gap-2">
            <button
              onClick={() => handlePlaneToReadBook(book)}
              className="bg-blue-300  px-3 text-sm py-2 rounded-lg flex gap-2 items-center justify-between"
            >
              <span> Plan To Read</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill={` ${
                  planToReadBooks?.data?.data?.find(
                    (x: any) => x?.bookId === book?._id
                  )
                    ? 'green'
                    : 'currentColor'
                }`}
                className={`bi bi-check ${
                  planToReadBooks?.data?.data?.find(
                    (x: any) => x?.bookId === book?._id
                  ) && 'border-2 border-green-600 rounded-full'
                }`}
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {' '}
                <path
                  d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                  id="mainIconPathAttribute"
                ></path>{' '}
              </svg>
            </button>
            <button
              onClick={() => handleFinishedBook(book)}
              className="bg-blue-300  px-3 text-sm py-2 rounded-lg flex gap-2 items-center justify-between"
            >
              <span> Finished</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill={` ${
                  finishedBooks?.data?.data?.find(
                    (x: any) => x?.bookId === book?._id
                  )
                    ? 'green'
                    : 'currentColor'
                }`}
                className={`bi bi-check ${
                  finishedBooks?.data?.data?.find(
                    (x: any) => x?.bookId === book?._id
                  ) && 'border-2 border-green-600 rounded-full'
                }`}
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {' '}
                <path
                  d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                  id="mainIconPathAttribute"
                ></path>{' '}
              </svg>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
