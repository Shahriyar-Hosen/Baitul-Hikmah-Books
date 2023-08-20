import { AiFillLeftCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function PreviousBtn() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="w-32 py-2 rounded-md flex gap-2 justify-center items-center mt-8 bg-slate-800 cursor-pointer shadow-md"
    >
      <AiFillLeftCircle /> Go Back
    </div>
  );
}
