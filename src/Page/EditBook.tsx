/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import From from "../components/ui/From";
import { useSingleBookQuery } from "../redux/Fetaures/Book/bookApi";
import { IBook } from "../redux/Fetaures/AddNewBook/addNewBookSlice";

const EditBook = () => {
  const params = useParams();
  const { data } = useSingleBookQuery(params.id!);
  const result: IBook = data?.data;
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <From key={result.id} book={result} editMode />
        </div>
      </div>
    </main>
  );
};

export default EditBook;
