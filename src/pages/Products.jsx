import Guitar from "../components/Guitar";
import { db } from "../data/db";

function Products({ addToCart }) {
    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">NUESTRA COLECCIÓN:</h2>
            <div className="row mt-5">
                {db.map(guitar => (
                    <Guitar 
                        key={guitar.id}
                        guitar={guitar}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </main>
    );
}

export default Products;
