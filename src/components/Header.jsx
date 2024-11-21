import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Header() {
    const { cart } = useContext(CartContext);

    // Calculamos el total de productos en el carrito
    const itemCount = useMemo(() => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    }, [cart]);

    return (
        <header className="py-5 header bg-dark">
            <div className="container-xl d-flex justify-content-between align-items-center">
                <h1 className="fw-bold text-primary">GuitarStore.</h1>
                <nav>
                    <ul className="nav d-flex justify-content-evenly w-100">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white nav-link-large">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link text-white nav-link-large">
                                Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link text-white nav-link-large">
                                <img src="/img/carrito.png" alt="Carrito" width="30" height="30" />
                                <span className="badge bg-primary ms-2">
                                    {itemCount}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
