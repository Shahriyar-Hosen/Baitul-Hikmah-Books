import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaClipboardList, FaDeleteLeft, FaPencil } from "react-icons/fa6";
import { HiOutlineClipboardList } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useAddToBooklistMutation,
  useGetBooklistsQuery,
} from "../../redux/features/readinglist/readinglist";
import {
  useAddToWishlistMutation,
  useGetWishlistsQuery,
  useRemoveFromWishlistsMutation,
} from "../../redux/features/wishlist/wishlistApi";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/features/wishlist/wishlistSlice";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/interface";
import DeleteModal from "../ui/DeleteModal";

const BookCard = ({ book }: { book: IBook }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const { data: wishlists } = useGetWishlistsQuery(user.email!);
  const [addToWishlistAPI] = useAddToWishlistMutation();
  const [removeFromWishlistAPI] = useRemoveFromWishlistsMutation();
  const { data: readinglists } = useGetBooklistsQuery(user.email!);
  const [addToReadingList] = useAddToBooklistMutation();

  const onAddWishlist = () => {
    const payload = { userEmail: user.email, book: book };
    dispatch(addToWishlist(book));
    addToWishlistAPI(payload);
    toast.success(`Successfully, ${book.title} added to wishlist`);
  };

  const onRemoveFromWishlist = () => {
    const payload = { email: user?.email, bookId: book?._id };
    dispatch(removeFromWishlist(book));
    removeFromWishlistAPI(payload);
    toast.success(`Successfully, ${book.title} removed from wishlist`);
  };

  const wishlisted = wishlists?.books?.find(
    (wishlist: IBook) => wishlist?._id === book?._id
  );

  const onAddReadinglist = () => {
    const payload = { userEmail: user.email, book };
    addToReadingList(payload);
    toast.success(`Successfully, ${book.title} added to booklist`);
  };

  const onUpdateReadinglist = () => {
    toast("Already added to wishlist!", {
      icon: "😀",
      style: { background: "#3c3c3c", color: "white" },
    });
  };

  const readinglisted = readinglists?.readingPlan?.find(
    (readinglist: IBook) => readinglist?._id === book?._id
  );
  const verifiedUser = user?.email && book?.userEmail === user?.email;

  return (
    <>
      <div className="card w-80 bg-base-200 shadow-xl hover:-translate-y-2 transition-transform">
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          {verifiedUser && (
            <div className=" flex justify-end">
              <button className="btn btn-circle text-info text-2xl">
                {readinglisted ? (
                  <FaClipboardList onClick={onUpdateReadinglist} />
                ) : (
                  <HiOutlineClipboardList onClick={onAddReadinglist} />
                )}
              </button>
              <button className="btn btn-circle text-error text-2xl">
                {wishlisted ? (
                  <AiFillHeart onClick={onRemoveFromWishlist} />
                ) : (
                  <AiOutlineHeart onClick={onAddWishlist} />
                )}
              </button>
            </div>
          )}
          <div className="badge badge-sm badge-secondary">{book?.author}</div>
          <p className="font-light">
            <span className="font-semibold">Publication Date:</span>{" "}
            {book.publicationDate}
          </p>
          <div className="badge badge-sm badge-outline">{book?.genre}</div>

          {verifiedUser && (
            <div className="card-actions justify-between items-center">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(`/update-book/${book?._id}`)}
                  className="btn btn-sm bg-cyan-700 tooltip"
                  data-tip="Update Book"
                >
                  <FaPencil />
                </button>
                <button
                  onClick={() => setShowModal(!showModal)}
                  className="btn btn-sm bg-red-700 tooltip"
                  data-tip="Delete Book"
                >
                  <FaDeleteLeft className="" />
                </button>
              </div>
            </div>
          )}
          <div>
            <button
              onClick={() => navigate(`/book-details/${book?._id}`)}
              className="btn btn-block btn-outline btn-secondary"
            >
              See Detail
            </button>
          </div>
        </div>
      </div>
      {showModal && <DeleteModal book={book} setShowModal={setShowModal} />}
    </>
  );
};
export default BookCard;
