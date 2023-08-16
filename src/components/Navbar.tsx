import {
  useGetBookWishlistQuery,
  useGetPlanToReadBooksQuery,
} from '@/redux/api/bookApi';
import { userInfoFromLocalstorage } from '@/utils/utils';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { data: wishlist } = useGetBookWishlistQuery(undefined);
  const { data: planToReadBooks } = useGetPlanToReadBooksQuery(undefined);
  const user = userInfoFromLocalstorage;
  const navigate = useNavigate();

  const logoutHandle = () => {
    localStorage.removeItem('Bookshelf-Info');
    toast.success('Log out successfully');
    navigate('/');
    window.location.reload();
  };
  return (
    <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-1 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-20 lg:py-2">
      <div className="flex items-center text-gray-900">
        <Link
          to="/"
          className="mr-4 block cursor-pointer py-1.5 text-2xl font-semibold font-sans leading-relaxed text-inherit antialiased"
        >
          The Bookshelf
        </Link>
        <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <Link to="/all-books" className="flex items-center">
              All Books
            </Link>
          </li>
        </ul>
        {/* right side content */}
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium"> {user?.email}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {' '}
              <circle
                cx="9"
                cy="7"
                r="3"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{' '}
              <path
                d="M11 13H7C4.79086 13 3 14.7909 3 17C3 18.6569 4.34315 20 6 20H12C13.6569 20 15 18.6569 15 17C15 14.7909 13.2091 13 11 13Z"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{' '}
              <path
                d="M15.7751 9.25L20.7249 9.25M20.7249 9.25L19 7.5M20.7249 9.25L19 10.9749"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{' '}
            </svg>

            {user?.accessToken ? (
              <button onClick={logoutHandle}>Log Out</button>
            ) : (
              <div className="flex flex-col text-sm font-semibold ">
                <Link to="/user/signin" className="hover:text-blue-700">
                  Sign In
                </Link>
                <Link to="/user/signup" className="hover:text-blue-700">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center gap-7">
            <Link to="/book/wishlist" className="relative">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {' '}
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    id="mainIconPathAttribute"
                  ></path>{' '}
                </svg>
              </button>
              <span className="absolute -right-4 -top-2 w-5 h-5 text-[10px] rounded-full bg-black text-white flex justify-center items-center">
                {wishlist ? wishlist?.data?.data?.length : 0}
              </span>
            </Link>

            <Link to="/book/plan-to-read" className="relative">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-book"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {' '}
                  <path
                    d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                    id="mainIconPathAttribute"
                  ></path>{' '}
                </svg>
              </button>
              <span className="absolute -right-4 -top-2 w-5 h-5 text-[10px] rounded-full bg-black text-white flex justify-center items-center">
                {planToReadBooks ? planToReadBooks?.data?.data?.length : 0}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
