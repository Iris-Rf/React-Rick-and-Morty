import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-dark">
      <NavLink className="navBar-a" to="">
        Home
      </NavLink>
      <NavLink className="navBar-a" to="characters">
        Characters
      </NavLink>
      <NavLink className="navBar-a" to="about">
        About
      </NavLink>
      <NavLink className="navBar-a" to="">
        Rick and Morty APP😎
      </NavLink>
    </nav>
  );
};

export default NavBar;
