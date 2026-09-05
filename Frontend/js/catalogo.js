const botonesCarrito = document.querySelectorAll(".btn-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

botonesCarrito.forEach(function(boton){
    boton.addEventListener("click", function(){
        const tarjeta = boton.closest(".prodctos-card");
        const nombre = tarjeta.querySelector("h2").textContent;
        const precioTexto = tarjeta.querySelector(".precio").textContent;

        const precio = parseInt(precioTexto.replace("$","").replace(".",""));

        const producto = {
            nombre : nombre,
            precio : precio
        };

        carrito.push(producto);
        localStorage.setItem("carrito",JSON.stringify(carrito));
        alert("Producto agregado al carrito")
    });
})