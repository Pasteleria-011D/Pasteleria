const formulario = document.getElementById("loginFrom");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const correoIngresado = correo.value.trim();
    const contraseñaIngresada = contraseña.value();

    if(correoIngresado === ""){
        alert("Debes ingresar tu correo electronico");
        return;
    }
    if(contraseñaIngresada === ""){
        alert("Debes ingresar tu contraseña");
        return;
    }

    const correoGuardado = localStorage.getItem("correoUsuario");
    const contraseñaGuardado = localStorage.getItem("contraseñaUsuario");
    if(correoIngresado === correoGuardado && contraseñaIngresada === contraseñaGuardado){
        alert("Inicio de Sesion Exitoso");
    }else{ 
        alert("El correo o la contraseña son incorrectas");
    }
})