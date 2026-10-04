import ProductoCard from "../componentes/ProductoCard";


function Catalogo({setCarrito}){
    return(
        <div className="container mt-4">
            <h1>Catalogo</h1>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Cuadrada de Chocolate"
                        precio={45000}
                        imagen="/img/torta-cuadrada-chocolate.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Brownie Sin Gluten"
                        precio={4000}
                        imagen="/img/brownie.webp"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Cuadrada de Frutas"
                        precio={50000}
                        imagen="/img/torta-cuadrada-frutas.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Circular de Vainilla"
                        precio={40000}
                        imagen="/img/torta-vainilla.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Cicular de Manjar"
                        precio={42000}
                        imagen="/img/torta-manjar.png"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Mousse de Chocolate"
                        precio={5000}
                        imagen="/img/mouse.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Tiramusi Clasico"
                        precio={5500}
                        imagen="/img/tiramisu.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Sin Azucar de Naranja"
                        precio={48000}
                        imagen="/img/torta-naranja.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Cheesecake Sin Azucar"
                        precio={47000}
                        imagen="/img/cheescake.webp"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Empanada de Manzana"
                        precio={3000}
                        imagen="/img/manzna.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Tarta de Santiago"
                        precio={6000}
                        imagen="/img/tarta-de-santiago.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Pan Sin Gluten"
                        precio={3500}
                        imagen="/img/pan-sin-gluten.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Vegana de Chocolate"
                        precio={50000}
                        imagen="/img/torta-vegana-chocolate.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Galletas Veganas de Avena"
                        precio={4500}
                        imagen="/img/galletas-de-avena-3.webp"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Especial de Cumpleaños"
                        precio={55000}
                        imagen="/img/torta-especial-cumpleaños.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Especial de Boda"
                        precio={60000}
                        imagen="/img/torta-boda.jpg"
                        setCarrito={setCarrito}
                    />
                </div>
        </div>
    );
}

export default Catalogo;