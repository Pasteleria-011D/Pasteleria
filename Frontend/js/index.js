const productosInicio = document.querySelectorAll(".product-card");

productosInicio.forEach(function(producto){

    producto.addEventListener("click", function(evento){

        const codigo = producto.getAttribute("data-id");

        localStorage.setItem("productoSeleccionado", codigo);

        window.location.href = "detalle-producto.html";

    });

});