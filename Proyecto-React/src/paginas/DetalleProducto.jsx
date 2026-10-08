import { useParams } from "react-router-dom";
import ProductoCard from "../componentes/ProductoCard";
import { useState } from "react";

function DetalleProducto({setCarrito}){
    const {id} = useParams();
    const [cantidad, setCantidad] = useState(1);

    const productos = [
    {
        id: "PG001",
        nombre: "Brownie sin Gluten",
        precio: "4000",
        imagen: "/img/brownie.webp",
        descripcion: "Delicioso brownie de chocolate sin gluten, con una textura suave y un intenso sabor a cacao."
    },
    {
        id: "PT002",
        nombre: "Tarta de Santiago",
        precio: "6000",
        imagen: "/img/tarta-de-santiago.jpg",
        descripcion: "Tradicional tarta de almendras de origen español, con un delicado sabor dulce y una textura suave."
    },
    {
        id: "PI002",
        nombre: "Tiramisu",
        precio: "5500",
        imagen: "/img/tiramisu.jpg",
        descripcion: "Clásico postre italiano preparado con café, crema de mascarpone y cacao, perfecto para los amantes del café."
    },
    {
        id: "TC001",
        nombre: "Torta Cuadrada de Chocolate",
        precio: "45000",
        imagen: "/img/torta-cuadrada-chocolate.jpg",
        descripcion: "Exquisita torta de chocolate con un sabor intenso y una textura suave, ideal para celebraciones especiales."
    },
    {
        id: "TC002",
        nombre: "Torta Cuadrada de Frutas",
        precio: "50000",
        imagen: "/img/torta-cuadrada-frutas.jpg",
        descripcion: "Deliciosa torta cubierta con una selección de frutas frescas, perfecta para disfrutar en ocasiones especiales."
    },
    {
        id: "TT002",
        nombre: "Torta Manjar",
        precio: "42000",
        imagen: "/img/torta-manjar.png",
        descripcion: "Suave y deliciosa torta rellena con nuestro tradicional manjar, ideal para compartir en familia."
    },
    {
        id: "PV002",
        nombre: "Galletas de Avena",
        precio: "4500",
        imagen: "/img/galletas-de-avena-3.webp",
        descripcion: "Crujientes y deliciosas galletas de avena, perfectas para acompañar un café o disfrutar como snack."
    },
    {
        id: "PI001",
        nombre: "Mousse de Chocolate",
        precio: "5000",
        imagen: "/img/mouse.jpg",
        descripcion: "Suave y cremoso mousse de chocolate con un intenso sabor a cacao, ideal para los amantes del chocolate."
    }
];

    const producto = productos.find(
        (producto) => producto.id === id
    );

    const productosRelacionados = productos.filter(
        (producto) => producto.id !== id
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
                        <p>{producto.descripcion}</p>
                        <label>Cantidad</label>
                        <input type="number" min="1" value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}/>
                        <button className="btn btn-primary mt-3" onClick={() => {
                            for(let i = 0; i < cantidad; i++){
                                setCarrito((carritoActual) => [
                                    ...carritoActual,
                                    {
                                        id: producto.id,
                                        nombre: producto.nombre,
                                        precio: producto.precio,
                                        imagen: producto.imagen
                                    }
                                ]);
                            }
                        }}>
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            ) : (
                <p>Producto no Encontrado</p>
            )}

            <section className="relacionados mt-5">
                <h2>Productos Relacionados</h2>

                <div className="row">
                    {productosRelacionados.slice(0, 4).map((producto) => (
                        <ProductoCard
                            key={producto.id}
                            id={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            imagen={producto.imagen} 
                            setCarrito={setCarrito}/>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default DetalleProducto;