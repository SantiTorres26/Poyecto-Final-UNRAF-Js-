import React, { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);

    const cartTotal = useMemo(
        () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
        [cart]
    );

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <div className="text-center mt-4">
                    <p className="fs-4">El carrito está vacío.</p>
                    <button className="btn btn-dark ver-productos-btn" onClick={() => window.location.href = "/products"}>
                        Ver Productos
                    </button>
                </div>
            ) : (
                <div className="table-responsive mt-5">
                    <table className="table table-bordered align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Imagen</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((guitar) => (
                                <tr key={guitar.id}>
                                    <td className="text-center">
                                        <img
                                            className="img-fluid"
                                            src={`/img/${guitar.image}.jpg`}
                                            alt={guitar.name}
                                            style={{ maxWidth: "100px", height: "auto", borderRadius: "5px" }}
                                        />
                                    </td>
                                    <td className="text-center text-black fs-4 fw-bold text-uppercase">{guitar.name}</td>
                                    <td className="text-center text-black fs-4 fw-bold text-uppercase">${guitar.price}</td>
                                    <td className="text-center">
                                        <div className="d-flex justify-content-center gap-3">
                                            <button
                                                type="button"
                                                className="btn btn-dark btn-sm rounded-circle"
                                                onClick={() => decreaseQuantity(guitar.id)}
                                            >
                                                -
                                            </button>
                                            <span>{guitar.quantity}</span>
                                            <button
                                                type="button"
                                                className="btn btn-dark btn-sm rounded-circle"
                                                onClick={() => increaseQuantity(guitar.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-danger btn-lg rounded-circle" // Hicimos el botón más grande
                                            type="button"
                                            onClick={() => removeFromCart(guitar.id)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="d-flex justify-content-center mt-3">
                        <div className="text-center">
                            <p className="fs-4">
                                Total a pagar: <strong>${cartTotal.toFixed(2)}</strong>
                            </p>
                            <button
                                className="btn btn-danger btn-lg me-3" // Botón más grande
                                onClick={clearCart}
                            >
                                Vaciar Carrito
                            </button>
                            <button
                                className="btn btn-success btn-lg ms-3" // Botón más grande
                                onClick={() => alert("Proceder a la compra")}
                            >
                                Proceder a la compra
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Cart;
