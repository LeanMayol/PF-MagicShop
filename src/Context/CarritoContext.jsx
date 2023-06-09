import React from "react";
import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  console.log(carrito);

  const agregarProducto = (item, cantidad) => {
    console.log(yaEstaEnCarrito(item.id));
    if (!yaEstaEnCarrito(item.id)) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
    } else {
      console.log("Producto ya agregado");
    }
  };
  const calcTotal = () => {
    let total = 0;
    carrito.forEach(
      (element) => (total += element.cantidad * element.item.price)
    );
    return total;
  };

  const deleteProducto = (id) => {
    const productoEliminado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito([...productoEliminado]);
  };

  const totalCantidad = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
  };
  const total = () => {
    return carrito.reduce(
      (total, producto) => total + producto.item.price * producto.cantidad,
      0
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const yaEstaEnCarrito = (id) => {
    return carrito.some((prod) => prod.id === id);
  };
  const carritoCounter = () => carrito.length;

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        totalCantidad,
        total,
        deleteProducto,
        vaciarCarrito,
        calcTotal,
        carritoCounter,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
