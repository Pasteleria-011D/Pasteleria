import { useParams } from "react-router-dom";

function DetalleProducto(){
    const {id} = useParams();


    const productos = [
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

    const producto = productos.find(
        (producto) => producto.id === id
    );

    return (
        <div className="container mt-4">
            <h1>Detalle Del Producto</h1>
            {producto ? (
                <div className="card">
                    <img src={producto.imagen}
                    className="card-img-top"
                    alt={producto.nombre}/>

                    <div className="card-body">
                        <h2>{producto.nombre}</h2>
                        <p>Codigo: {producto.id}</p>
                        <h3>${producto.precio}</h3>
                    </div>
                </div>
            ) : (
                <p>Producto no Encontrado</p>
            )}

            <section className="relacionados mt-5">
                <h2>Productos Relacionados</h2>
            </section>
        </div>
    );
}

export default DetalleProducto;