import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className="">
      <NavLink
        className={({ isActive }) =>
          `p-3 inline-block  ${
            isActive
              ? "text-orange-700 hover:text-orange-800"
              : "text-gray-900 hover:text-gray-950"
          }`
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `p-3 inline-block  ${
            isActive
              ? "text-orange-700 hover:text-orange-800"
              : "text-gray-900 hover:text-gray-950"
          }`
        }
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}
