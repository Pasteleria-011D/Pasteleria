const formulario = document.getElementById("contactoForm");

const nombre = document.getElementById("nombreContacto");
const correo = document.getElementById("correoContacto");
const comentario = document.getElementById("comentario");

function mostrarError(idError, mensaje){
    document.getElementById(idError).textContent = mensaje;
}

function limpiarError(idError){
    document.getElementById(idError).textContent = "";
}

function validarNombre(){
    const valor = nombre.value.trim();

    if (valor === ""){
        mostrarError("errorNombreContacto","El nombre es obligario");
        return false;
    }
    limpiarError("errorNombreContacto");
    return true;
}

function validarCorreo(){
    const valor = correo.value.trim();
    if(valor === ""){
        mostrarError("errorCorreoContacto","El correo es obligatorio")
        return false;
    }
        if(!valor.endsWidth("@duocuc.cl") && !valor.endsWidth("@profesor.duoc.cl") && !valor.endsWidth("@gmail.com")){
        mostrarError("errorCorreoContacto", "Solo se permiten correos @duocuc.cl, @profesor.duoc.cl y @gmail.com")
        return false;
    }
    limpiarError("errorCorreoContacto");
    return true;
}

function validarComentario(){
    const valor = comentario.value.trim();
    if(valor === ""){
        mostrarError("errorComentario","El comentario es obligatorio");
        return false;
    }
    if (valor.legth > 500){
        mostrarError("errorComentario", "El comentario no puede superar los 500 caracteres");
        return false;
    }
    limpiarError("errorComentario");
    return true;
}

nombre.addEventListener("input", validarNombre);
correo.addEventListener("input",validarCorreo);
comentario.addEventListener("input",validarComentario);

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const nombreValido = validarNombre();
    const correoValido = validarCorreo();
    const comentarioValidar = validarComentario();

    if(nombreValido && correoValido && comentarioValidar){
        alert("Mensaje enviado correctamente");
        formulario.reset();
    }else{
        alert("Por favor, corrije los errores del formulario");
    }
});
