/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { send } from "../../assets/Social Icon";
import useProfile from "../../hooks/useProfile";
import { IBook } from "../../redux/Features/AddNewBook/Features";
import { useAddReviewMutation } from "../../redux/Features/Book/bookApi";
import CommonInput from "../ui/Common/CommonInput";
import ReviewMessage from "./ReviewMessage";

const ReviewBox = ({ id, data }: { id: string; data: IBook }) => {
  const [message, setMessage] = useState<string>("");
  const [addReview, { isSuccess, isError }] = useAddReviewMutation();
  const { profile } = useProfile();
  const handleSubmit = async () => {
    const reviewExist = data.reviews.filter(
      (p) => p.email === profile?.data?.email
    );
    if (reviewExist) {
      toast.warning("Already you given your review");
      setMessage("");
    } else {
      await addReview({
        id: id,
        data: {
          email: profile?.data?.email || "",
          name: `${profile?.data?.name.firstName || ""} ${
            profile?.data?.name.lastName || ""
          }`,
          message,
        },
      });
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Review added successfully");
      setMessage("");
    }
    if (isError) {
      toast.error("Something wrong! try again");
    }
  }, [isError, isSuccess]);

  return (
    <div>
      <div className="flex gap-4 items-center my-8 justify-center">
        <div className="w-[50%]">
          <CommonInput
            label="Email Address"
            placeholder="Enter your email address"
            type="email"
            key={1}
            value={message}
            handleOnChange={setMessage}
          />
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 cursor-pointer p-2 mt-4 rounded-[45%]">
          <img onClick={() => handleSubmit()} src={send} alt="" />
        </div>
      </div>
      <div>
        {data?.reviews.length > 1 &&
          data?.reviews
            .slice(1)
            .map((review) => <ReviewMessage review={review} />)}
      </div>
    </div>
  );
};

export default ReviewBox;
