import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-dark">
      <NavLink className="navBar-a" to="">Home</NavLink>
      <NavLink className="navBar-a" to="characters">Characters</NavLink>
      <NavLink className="navBar-a" to="about">About</NavLink>
      Rick and Morty APP😎
    </nav>
  );
};

export default NavBar;
