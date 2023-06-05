import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, total, totalCantidad, vaciarCarrito, eliminarProducto } =
    useContext(CarritoContext);

  if (totalCantidad() === 0) {
    return (
      <>
        <h2 className="estilo">No hay productos en el carrito</h2>
        <Link className="producto" to="/">
          Seguir comprando
        </Link>

        <h3>Total: $ {total()}</h3>
      </>
    );
  }

  return (
    <div className="container">
      {carrito.map((producto) => (
        <CartItem
          key={producto.id}
          {...producto}
          onEliminar={eliminarProducto}
        />
      ))}
      <button className="finalizar" onClick={() => vaciarCarrito()}>
        Vaciar Carrito
      </button>
      <Link className="finalizar2" to="/formulario">
        Finalizar Compra
      </Link>
      <Link className="producto" to="/">
        Seguir comprando
      </Link>
    </div>
  );
};

export default Cart;
