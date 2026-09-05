const botonesCarrito = document.querySelectorAll(".btn-carrito");

botonesCarrito.forEach(function(boton){

    boton.addEventListener("click", function(){

        alert("Producto agregado al carrito");

    });

});