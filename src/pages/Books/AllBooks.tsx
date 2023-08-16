import Card from '@/components/Card';
import {
  useGetAllBooksQuery,
  useGetPublishedYearsQuery,
} from '@/redux/api/bookApi';
import { setSearchTermValue } from '@/redux/features/searchSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AllBooks = () => {
  const {
    searchTerm: searchTerms,
    genre: genres,
    publicationYear: publicationYearRD,
  } = useAppSelector((state) => state.search);
  const [searchTerm, setSearchTerm] = useState(searchTerms);
  const [genre, setGenre] = useState(genres);
  const [publicationYear, setPublicationYear] = useState(publicationYearRD);

  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetAllBooksQuery({
    searchTerm,
    genre,
    publicationYear,
  });
  const { data: publicationsYears } = useGetPublishedYearsQuery(genre);

  const handleSearchTerm = (e: any) => {
    dispatch(setSearchTermValue(e.target.value));
    setSearchTerm(e.target.value);
  };

  const handleSetGenre = (e: any) => {
    setPublicationYear('');
    if (e.target.value !== 'reset') {
      setGenre(e.target.value);
    } else {
      setGenre('');
    }
  };
  if (isLoading) {
    return (
      <p className="min-h-[100vh] flex items-center justify-center">
        Loading...
      </p>
    );
  }
  return (
    <section className="my-10 px-20">
      <div className="flex justify-end">
        <Link
          to="/add-new-book"
          className="text-white bg-blue-700 px-6 py-2 rounded-lg flex items-center gap-1 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            {' '}
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              id="mainIconPathAttribute"
            ></path>{' '}
          </svg>
          Add New Book
        </Link>
      </div>
      <h3 className="text-blue-800 font-semibold text-xl mb-3">All Books</h3>
      <div className="flex gap-2 items-center">
        <input
          onChange={(e) => handleSearchTerm(e)}
          type="text"
          className="outline-none py-2 px-5 w-6/12 rounded-lg border-2 border-blue-600"
          placeholder="Search with author,title,genre"
        />
        <select
          onChange={(e) => handleSetGenre(e)}
          className="px-5 py-2 rounded-lg border-2 border-blue-700"
        >
          <option value="">Select Genre</option>
          <option value="History">History</option>
          <option value="Fiction">Fiction</option>
          <option value="Fantacy">Fantacy</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Classic Literature">Classic Literature</option>
          <option value="reset">Reset</option>
        </select>
        {/* publication year */}
        {genre !== '' && (
          <select
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            className="px-5 py-2 rounded-lg border-2 border-blue-700"
          >
            <option value="">Select</option>
            {publicationsYears?.data?.map((year: any) => {
              return <option value={year}>{year}</option>;
            })}
            <option value="">Reset</option>
          </select>
        )}
      </div>

      {data?.data?.data?.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 my-10">
          {data?.data?.data?.map((book: any) => (
            <Card key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[70vh]">
          No book found
        </div>
      )}
    </section>
  );
};

export default AllBooks;
