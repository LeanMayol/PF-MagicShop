import React from "react";
import "./CartItem.css";
import "../../Servise/Firebase/Config";
import "../../Context/CarritoContext";
const CartItem = ({ item, cantidad, onEliminar, img }) => {
  return (
    <div className="container1">
      <h4 className="estilo">{item.name}</h4>
      <p className="estilo">Cantidad: {cantidad}</p>
      <p className="estilo">Precio: $ {item.price * cantidad}</p>
      <button onClick={() => onEliminar(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
