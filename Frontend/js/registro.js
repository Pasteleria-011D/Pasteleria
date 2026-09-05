// VALIDACIONES DE FORMULARIO DE REGISTRO

const formulario = document.getElementById("registerform");

const rut = document.getElementById("rut");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const region = document.getElementById("region");
const comuna = document.getElementById("comuna");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const confirmarContraseña = document.getElementById("confirmarContraseña");
const telefono = document.getElementById("telefono");


function mostrarError(idError, mensaje){
    document.getElementById(idError).textContent = mensaje;
}


function limpiarerror(idError){
    document.getElementById(idError).textContent = "";
}


function validarRut(rut) {

    rut = rut.trim();

    if (rut === "") {
        return false;
    }

    if (rut.length < 9) {
        return false;
    }   
    if(!rut.includes("-"))
    limpiarerror("errorRut");
    return true;
}

function validarNombre(){
    const valor = nombre.value.trim();
    if(valor === ""){
        mostrarError("errorNombre","El nombre es obligatorio");
        return false;
    }
    limpiarerror("errorNombre");
    return true;
}

function validarApellidos(){
    const valor = apellidos.value.trim();

    if(valor === ""){
        mostrarError("errorApellidos", "Los apellidos son abligatorios")
        return false;
    }

    limpiarerror("errorApellidos");
    return true;
}

function validarfechaNacimiento(){
    const fecha = fechaNacimiento.value;

    if(fecha === ""){
        mostrarError("errorFechaNacimiento", "La fecha de nacimiento es obligatoria");
        return false;
    }
    const fechaingresada = new Date(fecha);
    const hoy = new Date();

    if(fechaingresada > hoy){
        mostrarError("errorFechaNacimiento","La fecha no puede ser futura");
        return false;
    } 

    limpiarerror("errorFechaNacimiento");
    return true;
}

function validarRegion(){
    if(region.value === ""){
        mostrarError("errorRegion", "Debes seleccionar una region");
        return false;
    }
    limpiarerror("errorRegion");
    return true;
}

function validarComuna(){
    if(comuna.value === ""){
        mostrarError("errorComuna","Debes seleccionar una comuna");
        return false;
    }
    limpiarerror("errorComuna");
    return true;
}

function validarCorreo(){
    const valor = correo.value.trim();

    if(valor === ""){
        mostrarError("errorCorreo","El correo electronico es obligatorio");
        return false;
    }
    limpiarerror("errorCorreo");
    return true;
}

function validarContraseña(){
    const valor = contraseña.value;

    if(valor === ""){
        mostrarError("errorContraseña","La contraseña es obligatoria");
        return false;
    }
    if (valor.length < 8){
        mostrarError("errorContraseña","La contraseña debe tener al menos 8 caracteres");
        return false;
    }
    if(!/[A-Z]/.test(valor)){
        mostrarError("errorContraseña", "La contraseña debe al menos contener una Mayuscula");
        return false;
    }
    if(!/[0-9]/.test(valor)){
        mostrarError("errorContraseña","La contraseña debe contener al menos un numero");
        return false;
    }
    limpiarerror("errorContraseña");
    return true;
}

function validarConfirmarContraseña(){
    if(confirmarContraseña.value === ""){
        mostrarError("errorConfirmarContraseña","Debes confirmar tu contraseña");
        return false;
    }
    if(confirmarContraseña.value !== contraseña.value){
        mostrarError("errorConfirmarContraseña","Las contraseñas no coinciden");
        return false;
    }
    limpiarerror("errorConfirmarContraseña");
    return true;

}

function validarTelefono(){
    const valor = telefono.value.trim();
    if(valor === ""){
        limpiarerror("errorTelefono");
        return true;
    }
    limpiarerror("errorTelefono");
    return true;

}

rut.addEventListener("input", function (){
    if(rut.value.trim() === ""){
        mostrarError("errorRut", "El RUT es obligatorio");
    } else if(validarRut(rut.value)){
        mostrarError("errorRut", "Ingresa un RUT valido, ejemplo 12.345.678-9")
    }else{
        limpiarerror("errorRut");
        return true;
    }
});

nombre.addEventListener("input", validarNombre);
apellidos.addEventListener("input",validarApellidos);
fechaNacimiento.addEventListener("change", validarfechaNacimiento);
region.addEventListener("change",validarRegion);
comuna.addEventListener("change",validarComuna);
correo.addEventListener("input",validarCorreo);
contraseña.addEventListener("input",validarContraseña);
confirmarContraseña.addEventListener("input",validarConfirmarContraseña);
telefono.addEventListener("input",validarTelefono);

const comunasporRegion = {
    Metropolitana: [
        "Puente Alto",
        "Maipu",
        "La Florida",
        "Santiago",
        "Las condes",
        "Ñuñoa"
    ],
    Valparaiso: [
        "Valparaiso",
        "Viña del Mar",
        "Quilpue",
        "Villa Alemana",
        "San Antonio"
    ],
    Ohiggins:[
        "Rancagua",
        "San Bernardo",
        "Machali"
    ],
    Maule:[
        "Talca",
        "Linares",
        "Constitucion",
        "Curico"
    ],
    BioBio:[
        "Concepcion",
        "talcahuano",
        "Los Angeles",
        "Chillan"
    ],
    "La Araucania":[
        "Temuco",
        "Villarrica",
        "Pucon"
    ]
}

region.addEventListener("change", function (){
    const regionSeleccionada = region.value;

    comuna.innerHTML = "";
    
    if(regionSeleccionada === ""){
        const opcion = document.createElement("option");

        opcion.value = "";
        opcion.textContent = "Selecciona primero una region";

        comuna.appendChild(opcion);
        return;
    }

    const opcionInicial = document.createElement("option");

    opcionInicial.value = "";
    opcionInicial.textContent = "Selecciona una comuna";
    comuna.appendChild(opcionInicial);

    const comunas = comunasporRegion[regionSeleccionada];

    comunas.forEach(function(nombreComuna){
        const opcion = document.createElement("option");

        opcion.value = nombreComuna;
        opcion.textContent = nombreComuna;
        comuna.appendChild(opcion);
    });
    limpiarerror("errorRegion");
    limpiarerror("errorComuna");
});

formulario.addEventListener("submit", function (evento){
    evento.preventDefault();

    const rutValido = validarRut(rut.value);
    if(!rutValido){
        mostrarError("errorRut","Ingrese un RUT valido");
    }else{
        limpiarerror("errorRut");
    }
    const nombreValido = validarNombre();
    const apellidosValidos = validarApellidos();
    const fechaValida = validarfechaNacimiento();
    const regionValida = validarRegion();
    const comunaValida = validarComuna();
    const correoValido = validarCorreo();
    const contraseñaValida = validarContraseña();
    const confirmarContraseñaValida = validarConfirmarContraseña();
    const telefonoValido = validarTelefono();

    console.log("RUT:", rutValido);
    console.log("Nombre:", nombreValido);
    console.log("Apellidos:", apellidosValidos);
    console.log("Fecha:", fechaValida);
    console.log("Region:", regionValida);
    console.log("Comuna:", comunaValida);
    console.log("Correo:", correoValido);
    console.log("Contraseña:", contraseñaValida);
    console.log("Confirmar contraseña:", confirmarContraseñaValida);
    console.log("Telefono:", telefonoValido);

    if (rutValido && nombreValido && apellidosValidos && fechaValida && regionValida
        && comunaValida && correoValido && contraseñaValida && confirmarContraseñaValida
        && telefonoValido ){
            localStorage.setItem("correoUsuario",correo.value);
            localStorage.setItem("contraseñaUsuario",contraseña.value);
            alert("¡Registro Exitoso! Bienvenido a Pasteleria Mil Sabores");

    } else {

        alert("Por Favor, corrije los errores del formulario");

    }
})
