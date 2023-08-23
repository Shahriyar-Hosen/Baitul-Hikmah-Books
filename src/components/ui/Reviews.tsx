import { useForm } from "react-hook-form";
import PreviousBtn from "../reuseable/PreviousBtn";
import Review from "./Review";
import { useAppSelector } from "../../redux/hook";
import {
  useGetReviewsQuery,
  usePostReviewMutation,
} from "../../redux/features/review/reviewApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { IReview } from "../../types/interface";
import { Link } from "react-router-dom";

interface ReviewsProp {
  id: string | undefined;
}

interface ReviewFormInputs {
  review: string;
}

export default function Reviews({ id }: ReviewsProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReviewFormInputs>();

  const { user } = useAppSelector((state) => state.user);
  const [postReview, { isSuccess, isError }] = usePostReviewMutation();
  const { data: reviewsData } = useGetReviewsQuery(id!);

  const onSubmit = (data: ReviewFormInputs) => {
    const payload = { userEmail: user.email, ...data };
    postReview({ id, payload });
    reset();
  };

  useEffect(() => {
    if (isSuccess)
      toast.success("Your reivew is posted Successfully!", { id: "addBook" });
    if (isError) toast.error("Failed to post your review 😔", { id: "error" });
  }, [isSuccess, isError]);

  const userReviewd = reviewsData?.reviews?.find(
    (review: IReview) => review.userEmail === user?.email
  );

  return (
    <div>
      <h4 className="text-lg font-semibold">User Reviews:</h4>
      <div className="bg-neutral h-[0.5px]" />
      <div className="mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-3 items-end">
            <textarea
              rows={4}
              placeholder="This book is ....."
              className="resize-none textarea textarea-primary w-[400px]"
              {...register("review", { required: "Review is required" })}
            ></textarea>{" "}
            <button
              disabled={userReviewd || !user?.email}
              className="btn btn-sm btn-primary"
            >
              Submit
            </button>
          </div>
          {errors.review && (
            <p className="form_error">{errors.review.message}</p>
          )}
          {userReviewd && (
            <p className="form_error">User can't add more than one review</p>
          )}
          {!user?.email && (
            <div className="flex gap-2 items-center">
              <p className="form_error">Please sign in to post review</p>
              <Link to="/sign-in" className="text-xs link link-info">
                Sign In
              </Link>
            </div>
          )}
        </form>
        {reviewsData?.reviews?.map((review: IReview) => (
          <Review reviewDetails={review} bookId={id} />
        ))}
        <PreviousBtn />
      </div>
    </div>
  );
}
