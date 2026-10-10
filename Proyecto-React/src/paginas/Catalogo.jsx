import ProductoCard from "../componentes/ProductoCard";


function Catalogo({setCarrito}){
    const productos = [
        {
            id: "TC001",
            nombre: "Torta Cuadrada de Chocolate",
            precio: 45000,
            imagen: "/img/torta-cuadrada-chocolate.jpg",
            descripcion: "Deliciosa torta cuadrada de chocolate con una suave cobertura y decoración especial."
        },
        {
            id: "TC002",
            nombre: "Torta Cuadrada de Frutas",
            precio: 50000,
            imagen: "/img/torta-cuadrada-frutas.jpg",
            descripcion: "Deliciosa torta cuadrada de frutas con un diseño original y sabor espectacular."
        },
        {
            id: "TT001",
            nombre: "Torta Circular de Vainilla",
            precio: 40000,
            imagen: "/img/torta-vainilla.jpg",
            descripcion: "Suave torta circular de vainilla preparada con una receta tradicional."
        },
        {
            id: "TT002",
            nombre: "Torta Circular de Manjar",
            precio: 42000,
            imagen: "/img/torta-manjar.png",
            descripcion: "Deliciosa torta de bizcocho, relleno de manjar y con una decoración especial."
        },
        {
            id: "PI001",
            nombre: "Mousse de Chocolate",
            precio: 5000,
            imagen: "/img/mouse.jpg",
            descripcion: "Exquisito mousse de chocolate con una textura suave y cremosa."
        },
        {
            id: "PI002",
            nombre: "Tiramisu Clasico",
            precio: 5500,
            imagen: "/img/tiramisu.jpg",
            descripcion: "Delicioso tiramisu preparado con su sabor tradicional."
        },
        {
            id: "PSA001",
            nombre: "Torta Sin Azucar de Naranja",
            precio: 48000,
            imagen: "/img/torta-naranja.jpg",
            descripcion: "Deliciosa torta de naranja sin azúcar con un fresco y agradable sabor."
        },
        {
            id: "PSA002",
            nombre: "Cheesecake Sin Azucar",
            precio: 47000,
            imagen: "/img/cheescake.webp",
            descripcion: "Cremoso cheesecake sin azúcar con una textura suave y deliciosa."
        },
        {
            id: "PT001",
            nombre: "Empanada de Manzana",
            precio: 3000,
            imagen: "/img/manzna.jpg",
            descripcion: "Tradicional empanada dulce rellena de manzana."
        },
        {
            id: "PT002",
            nombre: "Tarta de Santiago",
            precio: 6000,
            imagen: "/img/tarta-de-santiago.jpg",
            descripcion: "Deliciosa tarta tradicional con un exquisito sabor a almendras."
        },
        {
            id: "PG001",
            nombre: "Brownie Sin Gluten",
            precio: 4000,
            imagen: "/img/brownie.webp",
            descripcion: "Delicioso brownie de chocolate preparado sin gluten."
        },
        {
            id: "PG002",
            nombre: "Pan sin Gluten",
            precio: 3500,
            imagen: "/img/pan-sin-gluten.jpg",
            descripcion: "Pan preparado sin gluten, ideal para acompañar tus comidas."
        },
        {
            id: "PV001",
            nombre: "Torta Vegana de Chocolate",
            precio: 50000,
            imagen: "/img/torta-vegana-chocolate.jpg",
            descripcion: "Deliciosa torta vegana de chocolate preparada con ingredientes de origen vegetal."
        },
        {
            id: "PV002",
            nombre: "Galletas Veganas de Avena",
            precio: 4500,
            imagen: "/img/galletas-de-avena-3.webp",
            descripcion: "Deliciosas galletas veganas hechas con avena."
        },
        {
            id: "TE001",
            nombre: "Torta Especial de Cumpleaños",
            precio: 55000,
            imagen: "/img/torta-especial-cumpleaños.jpg",
            descripcion: "Torta especial para celebrar cumpleaños y momentos importantes."
        },
        {
            id: "TE002",
            nombre: "Torta Especial de Boda",
            precio: 60000,
            imagen: "/img/torta-boda.jpg",
            descripcion: "Elegante torta especialmente preparada para celebrar un momento inolvidable."
        }
    ];
    return(
        <div className="container mt-4">
            <h1>Catalogo</h1>
                <div className="row">
                    {productos.map((producto, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={producto.id}>
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