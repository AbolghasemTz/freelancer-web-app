import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../feature/authentication/Logout";
import useUser from "../feature/authentication/useUser";
function HeaderMenu() {
  const { user } = useUser();

  const ADMIN_ROLE = "ADMIN";
  const OWNER_ROLE = "OWNER";
  const FREELANCER_ROLE = "FREELANCER";

  return (
    <ul className="flex gap-x-4 items-center">
      <li className="flex text-secondary-900">
        {/* {user?.role === ADMIN_ROLE ? (
          <Link to="/admin/dashboard">پنل ادمین</Link>
        ) : user?.role === OWNER_ROLE ? (
          <Link to="/owner">پنل مالک</Link>
        ) ? user.role === FREELANCER_ROLE ?
          <Link to="/freelancer">پنل فریلنسر</Link>
        ) : ""} */}
        {user?.role === ADMIN_ROLE ? (
          <Link to="/admin/dashboard">پنل ادمین</Link>
        ) : user?.role === OWNER_ROLE ? (
          <Link to="/owner">پنل مالک</Link>
        ) : user?.role === FREELANCER_ROLE ? (
          <Link to="/freelancer">پنل فریلنسر</Link>
        ) : (
          ""
        )}
      </li>

      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
