import { useState } from "react";
import { FaDeleteLeft, FaPencil } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import DeleteModal from "../components/ui/DeleteModal";
import Reviews from "../components/ui/Reviews";
import { useGetBookQuery } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";

const BookDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book } = useGetBookQuery(id!);
  const { user } = useAppSelector((state) => state.user);
  const verifiedUser = user?.email && book?.addedBy === user?.email;

  return (
    <div className="page_main">
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="">
          <img
            className="h-80 rounded-sm"
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80"
            alt=""
          />
        </div>
        <div>
          <h4 className="text-xl text-secondary font-semibold">
            {book?.title}{" "}
            <span className="text-sm text-slate-500 font-medium">
              by {book?.author}
            </span>
          </h4>
          <span className="badge badge-info">{book?.genre}</span>
          <p className="text-sm mt-2">
            <span className="font-semibold">Published On: </span>
            {book?.publicationDate}
          </p>
          {verifiedUser && (
            <div className="flex items-center gap-x-2 mt-8">
              <h4 className="font-semibold">Action Center :</h4>
              <button
                onClick={() => navigate(`/update-book/${book._id}`)}
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
        </div>
      </div>

      <Reviews id={id} />
      {showModal && <DeleteModal book={book} setShowModal={setShowModal} />}
    </div>
  );
};

export default BookDetails;
