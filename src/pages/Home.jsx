import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="container text-center mt-5 p-3 fs-5">
            <h1 className="text-center">Bienvenido a GuitarStore.</h1>
            <p>Explora nuestra colección de guitarras y encuentra la mejor para ti.</p>
            <div className="container text-center mt-5 p-3 fs-5">
                <Link to="/products" type="button" className="btn btn-dark fs-5 ver-productos-btn"><h2>Ver Productos</h2></Link>
            </div>
        </main>
    );
}

export default Home;
