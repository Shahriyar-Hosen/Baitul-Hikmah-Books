import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { IProfileResponse } from "../types/Auth";

export interface IProfileDropdown {
  data: IProfileResponse;
  setOpenProfile: Dispatch<SetStateAction<boolean | undefined>>;
}

const ProfileDropdown = ({ data, setOpenProfile }: IProfileDropdown) => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setOpenProfile(false);
    window.location.reload();
  };

  return (
    <div className="absolute -left-20 mt-2 mr-2 w-[150px]">
      <ul className=" p-3 bg-white shadow-md rounded-md">
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-semibold cursor-pointer" : "cursor-pointer"
          }
          to="/"
        >
          <li className="p-1 font-medium">
            {data.data?.name.firstName + " " + data.data?.name.lastName}
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-semibold cursor-pointer" : "cursor-pointer"
          }
          to="/"
        >
          <li className="p-1">Profile</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-semibold cursor-pointer" : "cursor-pointer"
          }
          to="/add-book"
          id="mhr-addBook"
        >
          <li className="p-1">Add Book</li>
        </NavLink>

        <li className="p-1 cursor-pointer" onClick={() => handleLogout()}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
