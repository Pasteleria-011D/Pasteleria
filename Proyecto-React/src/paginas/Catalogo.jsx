import ProductoCard from "../componentes/ProductoCard";


function Catalogo(){
    return(
        <div className="container mt-4">
            <h1>Catalogo</h1>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Cuadrada de Chocolate"
                        precio={0}
                        imagen="/img/torta-cuadrada-chocolate.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Brownie Sin Gluten"
                        precio={0}
                        imagen="/img/brownie.webp"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Cuadrada de Frutas"
                        precio={0}
                        imagen="/img/torta-cuadrada-frutas.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Circular de Vainilla"
                        precio={0}
                        imagen="/img/torta-vainilla.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Cicular de Manjar"
                        precio={0}
                        imagen="/img/torta-manjar.png"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Mousse de Chocolate"
                        precio={0}
                        imagen="/img/mouse.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Tiramusi Clasico"
                        precio={0}
                        imagen="/img/tiramisu.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Sin Azucar de Naranja"
                        precio={0}
                        imagen="/img/torta-naranja.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Cheesecake Sin Azucar"
                        precio={0}
                        imagen="/img/cheescake.webp"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Empanada de Manzana"
                        precio={0}
                        imagen="/img/manzna.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Tarta de Santiago"
                        precio={0}
                        imagen="/img/tarta-de-santiago.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Pan Sin Gluten"
                        precio={0}
                        imagen="/img/pan-sin-gluten.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Vegana de Chocolate"
                        precio={0}
                        imagen="/img/torta-vegana-chocolate.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Galletas Veganas de Avena"
                        precio={0}
                        imagen="/img/galletas-de-avena-3.webp"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Especial de Cumpleaños"
                        precio={0}
                        imagen="/img/torta-especial-cumpleaños.jpg"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <ProductoCard
                        nombre="Torta Especial de Boda"
                        precio={0}
                        imagen="/img/torta-boda.jpg"
                    />
                </div>
        </div>
    );
}

export default Catalogo;