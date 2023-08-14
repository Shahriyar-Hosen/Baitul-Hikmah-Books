/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useProfile from "../../hooks/useProfile";
import { IBook } from "../../redux/Fetaures/AddNewBook/Features";
import {
  useAddBookMutation,
  useEditBookMutation,
} from "../../redux/Fetaures/Book/bookApi";
import Error from "./Error";
import Success from "./Success";
interface FormProps {
  book?: IBook;
  editMode?: boolean;
}

const From = ({ book, editMode }: FormProps) => {
  const { profile } = useProfile();
  const [addBook, { isError, isSuccess }] = useAddBookMutation();
  const [editBook, { isSuccess: editSuccess, isError: isEditError }] =
    useEditBookMutation();
  const navigate = useNavigate();

  // State
  const [name, setName] = useState<string>(book?.title || "");
  const [author, setAuthor] = useState<string>(book?.author || "");
  const [genre, setGenre] = useState<string>(book?.genre || "");
  const [imgUrl, setImgUrl] = useState<string>(book?.imgUrl || "");

  const resetFrom = () => {
    setName("");
    setAuthor("");
    setGenre("");
  };

  const date = new Date();

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addBook({
        data: {
          title: name || "",
          author: author || "",
          genre: genre || "",
          publisherEmail: profile?.data.email || "",
          imgUrl,
          reviews: [{ name: "", email: "" }],
          publicationDate: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        },
      });

      resetFrom();
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleEditBook = async (e: React.FormEvent) => {
    e.preventDefault();
    await editBook({
      id: book?.id || "",
      data: {
        title: name,
        author,
        genre,
        id: book?.id || "",
        publicationDate: book?.publicationDate || "",
        publisherEmail: book?.publisherEmail || "",
        imgUrl,
        reviews: book?.reviews || [{}],
      },
    });
    resetFrom();
    navigate("/");
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book added successfully");
    }
    if (editSuccess) {
      toast.success("Book edited successfully");
    }
    if (isError || isEditError) {
      toast.error("Something wrong! try again");
    }
  }, [isError, isSuccess, isEditError, editSuccess]);

  return (
    <div>
      <form
        className="book-form"
        onSubmit={editMode ? handleEditBook : handleAddBook}
      >
        <div className="space-y-2">
          <label>Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="mhr-bookName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </div>

        <div className="space-y-2">
          <label>Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="mhr-author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            name="author"
          />
        </div>

        <div className="space-y-2">
          <label>Genre</label>
          <input
            required
            className="text-input"
            type="text"
            // id="mhr-thumbnail"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            name="genre"
          />
        </div>
        <div className="space-y-2">
          <label>Image URL</label>
          <input
            // required
            className="text-input"
            type="text"
            // id="mhr-thumbnail"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            name="imgUrl"
          />
        </div>

        {editMode ? (
          <button type="submit" className="submit" id="mhr-submit">
            Update Book
          </button>
        ) : (
          <button type="submit" className="submit" id="mhr-submit">
            Add Book
          </button>
        )}
      </form>
      {isSuccess && <Success message="Book was added successfully" />}
      {isError ? <Error /> : null}
      {editSuccess && <Success message="Book was edited successfully" />}
    </div>
  );
};

export default From;
