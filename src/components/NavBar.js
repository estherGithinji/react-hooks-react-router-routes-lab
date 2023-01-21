import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <NavLink style={{marginLeft: "10px"}} to="/" exact>Home</NavLink>
        <NavLink style={{marginLeft: "10px"}} to="/movies">Movies</NavLink>
        <NavLink style={{marginLeft: "10px"}} to="/actors">Actors</NavLink>
        <NavLink style={{marginLeft: "10px"}} to="/directors">Directors</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;
