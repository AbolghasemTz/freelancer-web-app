import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome, HiCollection } from "react-icons/hi";
function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CoustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>خانه</span>
          </CoustomNavLink>
        </li>
        <li>
          <CoustomNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CoustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CoustomNavLink({ children, to }) {
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 py-1.5 rounded-lg transition-all duration-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkClass} bg-primary-100/50 text-primary-900`
          : `${navlinkClass} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
