import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navegador.css";
import { NavLink, Link } from "react-router-dom";

const Navegador = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>MagicShop</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/Ropa`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "option")}
        >
          Ropa
        </NavLink>

        <NavLink
          to={`/category/Accesorio`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "option")}
        >
          Accesorios
        </NavLink>
      </div>

      <CartWidget />
    </nav>
  );
};

export default Navegador;
