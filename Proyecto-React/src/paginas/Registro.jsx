import { useState } from "react";
import AppAlert from "../componentes/AppAlert";
function Registro(){
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [rut, setRut] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [region, setRegion] = useState("");
    const [comuna, setComuna] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");
    const [telefono, setTelefono] = useState("");
    const [codigoPromocional, setCodigoPromocional] = useState("");
    const [errorRut, setErrorRut] = useState(false);

    const validarFormulario = () => {
        if (rut.trim() === ""){
            setErrorRut(true);
            return;
        }
        setErrorRut(false);
    };
    return(
        <div className="container mt-4">
            <h1>Registro</h1>
            <div className="mb-3">
                <label className="form-label">RUT *</label>
                <input type="text" className="form" placeholder="Ingrese un RUT válido"
                    value={rut} onChange={(e) => setRut(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre Completo *</label>
                <input type="text" className="form" placeholder="Ingrese su nombre completo"
                    value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
                    
            <AppAlert
                mostrar={errorRut}
                cerrar={() => setErrorRut(false)}
                variant="danger"
                msg="debe ingresar su rut"/>

            <button type="button" onClick={validarFormulario}>
                    Registrarse
            </button>
        
        
        </div>
    );
}

export default Registro;