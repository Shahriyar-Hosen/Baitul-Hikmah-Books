import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa6";
import { useGetWishlistsQuery } from "../redux/features/wishlist/wishlistApi";
import { useGetBooklistsQuery } from "../redux/features/readinglist/readinglist";

export default function Navbar() {
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const path = location?.state?.path?.pathname || "/";

  const { data: wishlists } = useGetWishlistsQuery(user.email!);

  const handleLogOut = () => {
    signOut(auth);
    dispatch(setUser(null));
    window.location.reload()
  };

  const { data: readingLists } = useGetBooklistsQuery(user?.email!);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user?.email));
    });

    if (user.email) {
      navigate(path, { replace: true });
    }
  }, [dispatch, user.email, path, navigate]);

  return (
    <div className="navbar bg-base-300 shadow-lg">
      <div className="flex-1">
        <a
          onClick={() => navigate("/")}
          className="btn btn-ghost font-mono text-xl"
        >
          BookVault
        </a>
      </div>
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
                {wishlists?.total || 0}
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
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
                  alt="profile-img"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
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
    </div>
  );
}
