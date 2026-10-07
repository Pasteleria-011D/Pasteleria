import ProductoCard from "../componentes/ProductoCard";

function Index(setCarrito){
    const Productos = [
        {
            id: "PG001",
            nombre: "Brownie sin Gluten",
            precio: "4.000",
            imagen: "/img/brownie.webp"
        },
        {
            id: "PT002",
            nombre: "Tarta de Santiago",
            precio: "6.000",
            imagen: "/img/tarta-de-santiago.jpg"
        },
        {
            id: "PI002",
            nombre: "Tiramisu",
            precio: "5.500",
            imagen: "/img/tiramisu.jpg"
        },
        {
            id: "TC001",
            nombre: "Torta Cuadrada de Chocolate",
            precio: "45.000",
            imagen: "/img/torta-cuadrada-chocolate.jpg"
        },
        {
            id: "TC002",
            nombre: "Torta Cuadrada de Frutas",
            precio: "50.000",
            imagen: "/img/torta-cuadrada-frutas.jpg"
        },
        {
            id: "TT002",
            nombre: "Torta Manjar",
            precio: "42.000",
            imagen: "/img/torta-manjar.png"
        },
        {
            id: "PV002",
            nombre: "Galletas de Avena",
            precio: "4.500",
            imagen: "/img/galletas-de-avena-3.webp"
        },
        {
            id: "PI001",
            nombre: "Mousse de Chocolate",
            precio: "5.000",
            imagen: "/img/mouse.jpg"
        }
    ];

    return (
        <div className="container mt-4">
            <h1>Pasteleria Mil Sabores</h1>

            <section>
                <h2>Celebrando 50 años de Dulzura</h2>
                <p>Innovacion y tradicion en la reposteria desde 1976</p>
            </section>

            <section>
                <h2>Productos Destacados</h2>
                <div className="row">
                    {Productos.map((Producto) => (
                        <ProductoCard
                            key={Producto.id}
                            nombre={Producto.nombre}
                            precio={Producto.precio}
                            imagen={Producto.imagen}
                            setCarrito={setCarrito}/>
                    ))}
                </div>
            </section>

            <section className="banner">
                <h2>Celebra con nosotros los 50 años</h2>
                <p>registrate usando el codigo <strong>FELICES50</strong> y obten
                un 10% de descuneto de por vida</p>
            </section>
        </div>
    )
}

export default Index;