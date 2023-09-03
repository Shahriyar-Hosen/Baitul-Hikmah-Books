import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa6";
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

const BookCardWithImg = ({ book }: { book: IBook }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    toast.success(`Successfully, ${book.title} added to booklists`);
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

  return (
    <div className="card w-60 bg-base-200 shadow-xl hover:-translate-y-2 transition-transform cursor-pointer">
      <figure onClick={() => navigate(`/book-details/${book._id}`)}>
        <img src={book.imageUrl} className="w-full h-72" alt="Shoes" />
      </figure>
      <div
        onClick={() => navigate(`/book-details/${book._id}`)}
        className="flex flex-col justify-start items-start gap-2 px-2.5 pt-3"
      >
        <h2 className="text-lg font-semibold" title={book.title}>
          {book?.title?.length > 20
            ? book.title.slice(0, 21) + "..."
            : book.title}
        </h2>

        <span className="badge badge-info text-sm">{book.author}</span>

        <p className="font-light text-sm">
          <span className="font-semibold">Published:</span>{" "}
          {book.publicationDate}
        </p>

        <div className="card-actions text-sm mb-2.5">
          <div className="badge badge-sm badge-outline text-sm p-2">
            {book.genre}
          </div>
        </div>
      </div>

      {user?.email && (
        <div className="w-full flex items-center justify-between px-2 pb-1 -mt-6">
          <div
            className="w-full"
            onClick={() => navigate(`/book-details/${book._id}`)}
          />
          <div className="flex items-center justify-end">
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
        </div>
      )}
    </div>
  );
};

export default BookCardWithImg;
