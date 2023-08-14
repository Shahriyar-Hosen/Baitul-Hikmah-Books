import { IReview } from "../../types/Common";

const ReviewMessage = ({ review }: { review: IReview }) => {
  return (
    <div className="flex gap-3 items-center mb-2">
      <img
        className="inline-block h-9 w-9 cursor-pointer rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div>
        <h3 className="font-medium">{review.name}</h3>
        <p>{review.message}</p>
      </div>
    </div>
  );
};

export default ReviewMessage;
