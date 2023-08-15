/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useNavigate, useParams } from "react-router-dom";
import bookImg from "../assets/book.jpg";
import ReviewBox from "../components/ReviewBox";
import useProfile from "../hooks/useProfile";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../redux/Features/Book/bookApi";
import { IBook } from "../types";

export const Book = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { data } = useSingleBookQuery(param.id!);
  const [deleteBook] = useDeleteBookMutation();
  const result: IBook = data?.data;
  const { profile } = useProfile();

  const handleDelete = async (): Promise<void> => {
    if (profile) {
      await deleteBook(result?.id || "");
      console.log("object");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img
            src={bookImg}
            alt={result?.title}
            className="w-64 h-auto mx-auto mb-4"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{result?.title}</h1>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Author:</span> {result?.author}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Genre:</span> {result?.genre}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Publication Date:</span>{" "}
            {result?.publicationDate}
          </p>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            quam adipisci molestias quia. Illum itaque ut, voluptatem ipsam non
            numquam dignissimos, ad eos assumenda consequuntur commodi
            recusandae officia dolores cupiditate.
          </p>
          {profile?.data?.email === result?.publisherEmail && (
            <div className="text-gray-500 space-x-4">
              <Link
                to={
                  profile
                    ? `/edit-book/${result?.id ? result.id : ""}`
                    : "/login"
                }
              >
                <button className="mhr-edit mt-8">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
              </Link>
              <button className="mhr-deleteBook" onClick={() => handleDelete()}>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <hr />
      <ReviewBox id={param.id!} data={result} />
    </div>
  );
};
