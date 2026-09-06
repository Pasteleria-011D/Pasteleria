const botonesCarrito = document.querySelectorAll(".btn-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

botonesCarrito.forEach(function(boton){
    boton.addEventListener("click", function(){
        const tarjeta = boton.closest(".prodctos-card");
        const nombre = tarjeta.querySelector("h2").textContent;
        const precioTexto = tarjeta.querySelector(".precio").textContent;

        const precio = parseInt(precioTexto.replace("$","").replace(".",""));
        const imagen = tarjeta.querySelector("img").getAttribute("src");
        const producto = {
            nombre : nombre,
            precio : precio,
            imagen : imagen
        };

        carrito.push(producto);
        localStorage.setItem("carrito",JSON.stringify(carrito));
        alert("Producto agregado al carrito")
    });
});

const productos = document.querySelectorAll(".prodctos-card");

productos.forEach(function(producto){
    producto.addEventListener("click",function(evento){
        if(evento.target.classList.contains("btn-carrito")){
            return;
        }

        const codigo = producto.getAttribute("data-id");
        localStorage.setItem("productoSeleccionado",codigo);
        window.location.href = "detalle-producto.html";
    })
})