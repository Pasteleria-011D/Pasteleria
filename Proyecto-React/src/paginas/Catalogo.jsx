import ProductoCard from "../componentes/ProductoCard";


function Catalogo({setCarrito}){
    const productos = [
    {
        nombre: "Torta Cuadrada de Chocolate",
        precio: 45000,
        imagen: "/img/torta-cuadrada-chocolate.jpg"
    },
    {
        nombre: "Brownie Sin Gluten",
        precio: 4000,
        imagen: "/img/brownie.webp"
    },
    {
        nombre: "Torta Cuadrada de Frutas",
        precio: 50000,
        imagen: "/img/torta-cuadrada-frutas.jpg"
    },
    {
        nombre: "Torta Circular de Vainilla",
        precio: 40000,
        imagen: "/img/torta-vainilla.jpg"
    },
    {
        nombre: "Torta Cicular de Manjar",
        precio: 42000,
        imagen: "/img/torta-manjar.png"
    },
    {
        nombre: "Mousse de Chocolate",
        precio: 5000,
        imagen: "/img/mouse.jpg"
    },
    {
        nombre: "Tiramusi Clasico",
        precio: 5500,
        imagen: "/img/tiramisu.jpg"
    },
    {
        nombre: "Torta Sin Azucar de Naranja",
        precio: 48000,
        imagen: "/img/torta-naranja.jpg"
    },
    {
        nombre: "Cheesecake Sin Azucar",
        precio: 47000,
        imagen: "/img/cheescake.webp"
    },
    {
        nombre: "Empanada de Manzana",
        precio: 3000,
        imagen: "/img/manzna.jpg"
    },
    {
        nombre: "Tarta de Santiago",
        precio: 6000,
        imagen: "/img/tarta-de-santiago.jpg"
    },
    {
        nombre: "Pan Sin Gluten",
        precio: 3500,
        imagen: "/img/pan-sin-gluten.jpg"
    },
    {
        nombre: "Torta Vegana de Chocolate",
        precio: 50000,
        imagen: "/img/torta-vegana-chocolate.jpg"
    },
    {
        nombre: "Galletas Veganas de Avena",
        precio: 4500,
        imagen: "/img/galletas-de-avena-3.webp"
    },
    {
        nombre: "Torta Especial de Cumpleaños",
        precio: 55000,
        imagen: "/img/torta-especial-cumpleaños.jpg"
    },
    {
        nombre: "Torta Especial de Boda",
        precio: 60000,
        imagen: "/img/torta-boda.jpg"
    }
    ];
    return(
        <div className="container mt-4">
            <h1>Catalogo</h1>
                <div className="row">
                    {productos.map((producto, index) => (
                    <div className="col-mb-4" key={index}>
                        <ProductoCard
                            key={producto.id}
                            id={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            imagen={producto.imagen}
                            setCarrito={setCarrito}/>
                    </div>
                    ))}
                </div>
        </div>
    );
}

export default Catalogo;