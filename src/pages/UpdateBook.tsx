import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import PreviousBtn from "../components/reuseable/PreviousBtn";
import {
  useGetBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";
import { IBook } from "../types/interface";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book } = useGetBookQuery(id!);
  const [updateBook, { isError, isSuccess }] = useUpdateBookMutation();

  const { author, genre, imageUrl, publicationDate, title }: IBook = book || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();

  const onSubmit = (data: IBook) => {
    const payload = { id, data };
    updateBook(payload);

    setTimeout(() => {
      navigate("/all-books");
    }, 1500);
  };

  useEffect(() => {
    if (isSuccess)
      toast.success(`Successfully updated book: ${title}`, {
        id: "success",
      });
    if (isError)
      toast.error(`Failed to updated book: ${title}`, {
        id: "err",
      });
  }, [isSuccess, isError]);

  return (
    <div className="page_main">
      <h2 className="section_title mt-16">Update Book</h2>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              defaultValue={title}
              placeholder="Book Title"
              className="input input-bordered"
              {...register("title")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              defaultValue={author}
              placeholder="Book Author"
              className="input input-bordered"
              {...register("author")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select
              defaultValue={genre}
              className="select w-full max-w-xs"
              {...register("genre")}
            >
              <option selected>Self-Help</option>
              <option>Fantasy</option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Religion</option>
              <option>Novel</option>
              <option>Academic</option>
              <option>Classic</option>
              <option>Sci-Fi</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              type="date"
              defaultValue={publicationDate}
              placeholder="Publication Date"
              className="input input-bordered"
              {...register("publicationDate", {
                required: "Publication Date is required",
              })}
            />
            {errors.publicationDate && (
              <p className="form_error">{errors.publicationDate.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input
              type="url"
              defaultValue={imageUrl}
              placeholder="Caver Image"
              className="input input-bordered"
              {...register("imageUrl", { required: "Image Url is required" })}
            />
            {errors.imageUrl && (
              <p className="form_error">{errors.imageUrl.message}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Book</button>
          </div>
        </form>
      </div>
      <PreviousBtn />
    </div>
  );
};

export default UpdateBook;
