import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/ui/Logo";
import { useGetProfileQuery } from "../redux/Features/Auth/authSlice";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState<boolean>();
  const token: string | null = localStorage.getItem("accessToken");
  const { data } = useGetProfileQuery(token as string);

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Logo />

        <ul className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold cursor-pointer" : "cursor-pointer"
            }
            id="mhr-bookStore"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold cursor-pointer" : "cursor-pointer"
            }
            to="/books"
            id="mhr-addBook"
          >
            <li>All Book</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold cursor-pointer" : "cursor-pointer"
            }
            to={`${data?.data.email ? "/whitelist" : "/login"}`}
            id="mhr-addBook"
          >
            <li>Whitelist</li>
          </NavLink>
        </ul>

        <div>
          <ul className="hidden md:flex items-center space-x-6">
            {data?.success === true ? (
              <div className="relative">
                <img
                  onClick={() => setOpenProfile(!openProfile)}
                  className="inline-block h-9 w-9 cursor-pointer rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                {openProfile && (
                  <ProfileDropdown
                    setOpenProfile={setOpenProfile}
                    data={data}
                  />
                )}
              </div>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold cursor-pointer" : "cursor-pointer"
                }
                to="/login"
                id="mhr-addBook"
              >
                <li>Login</li>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
