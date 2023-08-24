import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { avatar } from "../assets";
import Logo from "../components/ui/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { auth } from "../lib/firebase";
import { useGetBooklistsQuery } from "../redux/features/readinglist/readinglist";
import { setUser } from "../redux/features/user/userSlice";
import { useGetWishlistsQuery } from "../redux/features/wishlist/wishlistApi";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Navbar = () => {
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const path = location?.state?.path?.pathname || "/";

  const { data: wishlists } = useGetWishlistsQuery(user.email!);
  const { data: readingLists } = useGetBooklistsQuery(user?.email!);

  const handleLogOut = () => {
    signOut(auth);
    dispatch(setUser(null));
    window.location.reload();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user?.email));
    });

    if (user.email) {
      navigate(path, { replace: true });
    }
  }, [dispatch, user.email, path, navigate]);

  return (
    <header className="w-full  h-16 fixed top backdrop-blur-lg z-10 bg-[#02004867]">
      <nav className="w-[95%] xl:w-full container mx-auto">
        <div className="h-full w-full bg-transparent">
          <div className="flex items-center justify-between w-full h-full mx-auto ">
            <Logo />
            <div>
              <ul className="flex items-center">
                <li className="hidden lg:block">
                  <Button variant="link" asChild>
                    <Link to="/">Home</Link>
                  </Button>
                </li>
                <li className="hidden lg:block">
                  <Button variant="link" asChild>
                    <Link to="/all-books">All Books</Link>
                  </Button>
                </li>

                <div className="flex-none">
                  <div className="dropdown dropdown-end">
                    <Link
                      to={`/reading-list/${user?.email}`}
                      className="btn btn-ghost btn-circle"
                      onClick={() => setWishlistOpen(false)}
                    >
                      <div className="indicator">
                        <FaClipboardList className="text-[1.30rem] text-info" />
                        <span className="badge bg-neutral badge-sm indicator-item">
                          {readingLists?.readingPlan?.length || 0}
                        </span>
                      </div>
                    </Link>

                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle"
                      onClick={() => setWishlistOpen(!wishlistOpen)}
                    >
                      <div className="indicator">
                        <AiFillHeart className="text-2xl text-error" />
                        <span className="badge bg-neutral badge-sm indicator-item">
                          {wishlists?.books?.length || 0}
                        </span>
                      </div>
                    </label>
                    {wishlistOpen && (
                      <div
                        tabIndex={0}
                        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow"
                      >
                        <div className="card-body">
                          <span className="font-bold text-lg">5 Items</span>
                          <span className="text-info">Subtotal: $999</span>
                          <div className="card-actions">
                            <button className="btn btn-primary btn-block">
                              View cart
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {user.email ? (
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <Avatar>
                            <AvatarImage src={avatar} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="block lg:hidden">
                          <Button variant="link" asChild>
                            <Link to="/all-books">All Books</Link>
                          </Button>
                        </li>
                        <li>
                          <Link to="/add-book">Add Books</Link>
                        </li>
                        <li
                          onClick={handleLogOut}
                          className="btn btn-outline btn-error mt-2 "
                        >
                          <a>Logout</a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <button
                      onClick={() => navigate("/sign-in")}
                      className="btn btn-success btn-sm"
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
