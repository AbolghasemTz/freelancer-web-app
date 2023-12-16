import { NavLink } from "react-router-dom";

export  function CoustomNavLink({ children, to }) {
    const navlinkClass =
      "flex items-center px-1 gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 py-1.5 rounded-lg transition-all duration-300";
  
    return (
    <li>
          <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass}  bg-primary-100/80 text-primary-900`
            : `${navlinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
    );
  }