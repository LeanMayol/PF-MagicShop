import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
  return (
    <section className="">
      <div className="cards">
        <p className="style"> {name}</p>
        <p className="style">Precio : {price}</p>
        <img className="imgProducto" src={img} alt={name} />

        <Link className="detalles" to={`/item/${id}`}>
          {" "}
          Ver Detalles{" "}
        </Link>
      </div>
    </section>
  );
};

export default Item;
