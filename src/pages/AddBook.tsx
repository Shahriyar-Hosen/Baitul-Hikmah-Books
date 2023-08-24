import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PreviousBtn from "../components/reuseable/PreviousBtn";
import { usePostBookMutation } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";
import { IBook } from "../types/interface";

const AddBook = () => {
  const [addBook, { isSuccess, isError /* isLoading */ }] =
    usePostBookMutation();
  const { user } = useAppSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBook>();

  const onSubmit = (data: IBook) => {
    const payload = { ...data, addedBy: user.email };
    addBook(payload);
    reset();
  };

  useEffect(() => {
    if (isSuccess)
      toast.success("Successfully added the book 📘", { id: "addBook" });
    if (isError) toast.error("Failed to add the book 😔", { id: "error" });
  }, [isSuccess, isError]);

  return (
    <div className="page_main">
      <h2 className="section_title mt-16">Add New Book</h2>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Paramoy Life"
              className="input input-bordered"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="form_error">{errors.title.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              placeholder="Jhankar Mahbub"
              className="input input-bordered"
              {...register("author", { required: "Author is required" })}
            />
            {errors.author && (
              <p className="form_error">{errors.author.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select
              className="select w-full max-w-xs"
              {...register("genre", { required: "Genre is required" })}
            >
              <option selected>Self-Help</option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Religion</option>
              <option>Novel</option>
              <option>Academic</option>
              <option>Classic</option>
              <option>Sci-Fi</option>
            </select>
            {errors.genre && (
              <p className="form_error">{errors.genre.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              type="date"
              placeholder="Jhankar Mahbub"
              className="input input-bordered"
              {...register("publicationDate", {
                required: "Publication Date is required",
              })}
            />
            {errors.publicationDate && (
              <p className="form_error">{errors.publicationDate.message}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Book</button>
          </div>
        </form>
      </div>
      <PreviousBtn />
    </div>
  );
};
export default AddBook;
