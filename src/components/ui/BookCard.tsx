/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useProfile from "../../hooks/useProfile";
import { useAddWhiteListMutation } from "../../redux/Features/Whitelist/whitelistApi";
import { IBook } from "../../types";

const BookCard = ({ book }: { book: IBook }) => {
  const { author, genre, publicationDate, title, id } = book;
  const [addWhitelist, { isSuccess, isError }] = useAddWhiteListMutation();
  const { profile } = useProfile();

  console.log("object book", book);

  const handleWhitelist = async () => {
    await addWhitelist({
      data: { email: profile?.data?.email || "", data: book },
    });
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Added to Whitelist");
    }
    if (isError) {
      toast.error("Something wrong");
    }
  }, [isSuccess, isError]);
  return (
    <div className="book-card">
      <img
        className="h-[240px] w-[170px] object-cover"
        src={book.imgUrl}
        alt="book"
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="mhr-badge">featured</span>
          {/* {featured ? <span className="mhr-badge">featured</span> : <span />} */}
          <div className="text-gray-500 space-x-2">
            <button className="mhr-whitelist" onClick={() => handleWhitelist()}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-2 mt-4 h-full">
          <Link to={`book/${id!}`}>
            <h4 className="mhr-book-name">{title}</h4>
          </Link>
          <p className="mhr-author">author: {author}</p>
          <p className="mhr-author">Genre: {genre}</p>
          <p className="mhr-author">Publication: {publicationDate}</p>
          <div className="mhr-stars">
            <svg viewBox="0 0 20 20" fill="currentColor" className="star">
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              />
            </svg>

            <svg viewBox="0 0 20 20" fill="currentColor" className="star">
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              />
            </svg>

            <svg viewBox="0 0 20 20" fill="currentColor" className="star">
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
