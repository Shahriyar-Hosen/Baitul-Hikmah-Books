import { useParams } from "react-router-dom";
import {
  useGetBooklistsQuery,
  useUpdateBooklistsMutation,
} from "../redux/features/readinglist/readinglist";
import { toast } from "react-hot-toast";
import { IBook } from "../types/interface";

interface IReadingList extends IBook {
  completedReading: boolean;
}

export default function ReadlingList() {
  const { email } = useParams();
  const [updateReadingList] = useUpdateBooklistsMutation();

  const { data } = useGetBooklistsQuery(email!);
  const readingPlans = data?.readingPlan;

  const onUpdateReadingList = (book: IReadingList) => {
    const payload = { email, bookId: book?._id };
    updateReadingList(payload);
    toast.success("Congratulation! You've read another book ");
  };

  return (
    <div className="min-h-[80vh]">
      <div className=" mt-14 mb-8">
        <h3 className="section_title">Reading List</h3>
        <div className="overflow-x-auto">
          <table className="table border-2 border-neutral">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {readingPlans.map((book: IReadingList, idx: number) => (
                <tr id={book._id}>
                  <th>{idx + 1}</th>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    {book.completedReading ? (
                      <span className="badge badge-success">Done</span>
                    ) : (
                      <span className="badge badge-error">Not Yet</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => onUpdateReadingList(book)}
                      disabled={book.completedReading}
                      className="btn btn-xs btn-secondary"
                    >
                      Mark Done
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
