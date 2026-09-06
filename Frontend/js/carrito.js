const productoCarrito = document.getElementById("productosCarrito");
const total = document.getElementById("total");
const vaciarCarrito = document.getElementById("vaciarCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito(){
    productoCarrito.innerHTML = "";

    let totalCarrito = 0;
    if(carrito.length === 0){
        productoCarrito.innerHTML = "<p>Tu carrito esta vacio </p>";
        total.textContent = "0";
        return;
    }
    carrito.forEach(function(producto){
        const productoHTML = document.createElement("div");

        productoHTML.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio.toLocaleString("es-CL")}</p>
        `;
        productoCarrito.appendChild(productoHTML);
        totalCarrito = totalCarrito + producto.precio;
        const edad = parseInt(localStorage.getItem("edadUsuario")) || 0;
        const descuentoFelices = localStorage.getItem("descuentoFELICES50");
        let descuento = 0;

        if(edad >= 50){
            descuento = 50;
        }else if (descuentoFelices === "10"){
            descuento = 10;
        }
        const montoDescuento = totalCarrito * descuento / 100;
        const totalFinal = totalCarrito - montoDescuento;
        total.textContent = totalFinal.toLocaleString("es-CL");
    });
    total.textContent = totalCarrito.toLocaleString("es-CL");
}

vaciarCarrito.addEventListener("click", function(){
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
});

mostrarCarrito();