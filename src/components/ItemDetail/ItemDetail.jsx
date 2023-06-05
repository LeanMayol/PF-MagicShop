import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";
import Item from "../Item/Item";
import ItemDetailContainer from "../ItemDetailContainar/ItemDetailContainer";
import ItemList from "../ItemList/ItemList";

const ItemDetail = ({ id, name, price, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const contadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id: id, name, price };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2> {name}</h2>
      <h3>Precio: {price}</h3>
      <p>{descripcion}</p>
      <img style={{ height: "250px", width: "200px" }} src={img} alt={name} />

      {agregarCantidad > 0 ? (
        <Link className="terminarCompra" to="/cart">
          {" "}
          Terminar compra{" "}
        </Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={contadorCantidad}
        />
      )}
      <Link className="producto" to="/">
        {" "}
        Ir a tienda
      </Link>
    </div>
  );
};

export default ItemDetail;
