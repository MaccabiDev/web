import * as React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/user-profile-settings">User profile settings</NavLink>
        </li>
        <li>
          <NavLink to="/signin">SignIn</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
