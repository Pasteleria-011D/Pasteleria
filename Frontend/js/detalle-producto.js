const codigoProducto = localStorage.getItem("productoSeleccionado");
const detalleProducto = document.getElementById("detalleProducto");

const producto = productos.find(function(producto){
    return producto.codigo === codigoProducto;
});

if(producto){
    detalleProducto.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="detalle-info">
            <h1>${producto.nombre}</h1>
            <p class="precio">
                $${producto.precio.toLocaleString("es-CL")}
            </p>
            <p>${producto.descripcion}</p>
            <button class="btn-carrito" id="agregarCarrito">
                Agregar al Carrito
            </button>
        </div>`;      
}else{
    detalleProducto.innerHTML = `
    <h2>Producto no encontrado</h2>
    <a href="catalogo.html">Volver al catálogo</a>`;
}

const botonCarrito = document.getElementById("agregarCarrito");
if(botonCarrito){
    botonCarrito.addEventListener("click",function(){
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const productoCarrito = {
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen
        };
        carrito.push(productoCarrito);

        localStorage.setItem("carrito",JSON.stringify(carrito));
        alert("Producto agregado al carrito")
    })
}

const productosRelacionados = document.getElementById("productosRelacionados");

const relacionados = productos
    .filter(function(producto){
        return producto.codigo !== codigoProducto;
    })
    .slice(0, 4);

relacionados.forEach(function(producto){

    const tarjeta = document.createElement("article");

    tarjeta.classList.add("producto-relacionado");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toLocaleString("es-CL")}</p>
        <button class="btn-relacionado" data-id="${producto.codigo}">
            Ver producto
        </button>
    `;

    productosRelacionados.appendChild(tarjeta);

});

const botonesRelacionados = document.querySelectorAll(".btn-relacionado");

botonesRelacionados.forEach(function(boton){

    boton.addEventListener("click", function(){

        const codigo = boton.getAttribute("data-id");

        localStorage.setItem("productoSeleccionado", codigo);

        window.location.href = "detalle-producto.html";

    });

});