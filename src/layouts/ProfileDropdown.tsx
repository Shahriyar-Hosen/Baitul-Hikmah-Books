import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { IProfileResponse } from "../types/Auth";

const ProfileDropdown = ({
  data,
  setOpenProfile,
}: {
  data: IProfileResponse;
  setOpenProfile: Dispatch<SetStateAction<boolean | undefined>>;
}) => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setOpenProfile(false);
    window.location.reload();
  };
  console.log(data.data);
  return (
    <div className="absolute -left-20 mt-2 mr-2 w-[150px]">
      <ul className=" p-3 bg-white shadow-md rounded-md">
        <Link to="/">
          <li className="p-1 font-medium">
            {data.data?.name.firstName + " " + data.data?.name.lastName}
          </li>
        </Link>
        <Link to="/">
          <li className="p-1">Profile</li>
        </Link>
        <Link to="/add-book" className="cursor-pointer" id="mhr-addBook">
          <li className="p-1">Add Book</li>
        </Link>
        <>
          <li className="p-1 cursor-pointer" onClick={() => handleLogout()}>
            Logout
          </li>
        </>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
