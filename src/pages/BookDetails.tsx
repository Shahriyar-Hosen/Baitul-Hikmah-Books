import { useState } from "react";
import { FaDeleteLeft, FaPencil } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import DeleteModal from "../components/ui/DeleteModal";
import Reviews from "../components/ui/Reviews";
import { useGetBookQuery } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";
import { IBook } from "../types/interface";

const BookDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book } = useGetBookQuery(id!);
  const { user } = useAppSelector((state) => state.user);

  const {
    author,
    genre,
    imageUrl,
    publicationDate,
    title,
    userEmail,
    _id,
  }: IBook = book || {};

  const verifiedUser = user?.email && userEmail === user?.email;

  return (
    <div className="page_main">
      <div className="flex flex-col lg:flex-row gap-6 mb-8 mt-16">
        <div className="w-96">
          <img className="w-full rounded-sm" src={imageUrl} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-xl text-secondary font-semibold">
            {title}
            <span className="text-sm text-slate-500 font-medium">
              &nbsp;by {author}
            </span>
          </h4>
          <span className="badge badge-info">{genre}</span>
          <p className="text-sm mt-2">
            <span className="font-semibold">Published On: </span>
            {publicationDate}
          </p>
          {verifiedUser && (
            <div className="flex items-center gap-x-2 mt-8">
              <h4 className="font-semibold">Action Center :</h4>
              <button
                onClick={() => navigate(`/update-book/${_id}`)}
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
          )}
          <p className=" w-full max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            cupiditate, ut rem aspernatur earum, reprehenderit praesentium vero
            repellat eum voluptatem quis quae minus laboriosam molestias! Eaque
            officiis nam inventore veritatis!
          </p>
        </div>
      </div>

      <Reviews id={id} />
      {showModal && <DeleteModal book={book} setShowModal={setShowModal} />}
    </div>
  );
};

export default BookDetails;
