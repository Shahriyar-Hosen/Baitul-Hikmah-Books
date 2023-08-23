import { useEffect, useState } from "react";
import { IReview } from "../../types/interface";
import { useUpdateReviewMutation } from "../../redux/features/review/reviewApi";
import toast from "react-hot-toast";

interface IUpdateReviewModalProps {
  setUpdateReviewModal: (value: boolean) => void;
  reviewDetails: IReview;
  bookId: string | undefined;
}

export default function UpdateReviewModal({
  setUpdateReviewModal,
  reviewDetails,
  bookId,
}: IUpdateReviewModalProps) {
  const [review, setReview] = useState(reviewDetails?.review);

  const [updateReview, { isSuccess, isError }] = useUpdateReviewMutation();

  const onUpdateReview = () => {
    const payload = { id: bookId, email: reviewDetails?.userEmail, review };

    updateReview(payload);
    setTimeout(() => {
        setUpdateReviewModal(false);
    }, 1200);
  };

  useEffect(() => {
    if (isSuccess)
      toast.success("Successfully updated your review", { id: "addBook" });
    if (isError) toast.error("Failed to update the review 😔", { id: "error" });
  }, [isSuccess, isError]);

  return (
    <div className="modal modal-open flex items-center justify-center">
      <div className="modal-box" onSubmit={onUpdateReview}>
        <button
          onClick={() => setUpdateReviewModal(false)}
          className="btn btn-sm btn-warning btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Update Your Revew!</h3>
        <textarea
          rows={4}
          placeholder="This book is ....."
          defaultValue={reviewDetails.review}
          className="resize-none textarea textarea-primary w-full mt-2"
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <div className="modal-action ">
          <button
            onClick={onUpdateReview}
            type="submit"
            className="btn btn-success"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
