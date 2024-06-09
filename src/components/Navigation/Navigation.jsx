import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const Navigation = () => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          `p-3 inline-block  ${
            isActive
              ? "text-orange-700 hover:text-orange-800"
              : "text-gray-900 hover:text-gray-950"
          }`
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            `p-3 inline-block  ${
              isActive
                ? "text-orange-700 hover:text-orange-800"
                : "text-gray-900 hover:text-gray-950"
            }`
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
