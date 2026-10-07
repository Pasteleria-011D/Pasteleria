import { useState } from "react";
import AppAlert from "../componentes/AppAlert";
function Registro(){

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

    const [mensaje, setMensaje] = useState("");
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [tipoAlerta, setTipoAlerta] = useState("danger");

    const validarFormulario = (e) => {
        e.preventDefault();

        if (rut.trim() === ""){
            setMensaje("Debe ingresar su RUT");
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return;
        }
        if(nombre.trim() === ""){
            setMensaje("Debe ingresar sus nombre");
            setTipoAlerta("danger")
            setMostrarAlerta(true);
            return;
        }

        if(apellidos.trim() === ""){
            setMensaje("Debe ingresar sus apellidos");
            setTipoAlerta("danger")
            setMostrarAlerta(true);
            return;
        }
        if(fechaNacimiento === ""){
            setMensaje("Debe ingresar su fecha de nacimiento");
            setTipoAlerta("danger")
            setMostrarAlerta(true);
            return;
        }
        if(region === ""){
            setMensaje("Debe seleccionar una region");
            setTipoAlerta("danger")
            setMostrarAlerta(true);
            return;
        }
        if(comuna === ""){
            setMensaje("Debe seleccionar una comuna");
            setTipoAlerta("danger")
            setMostrarAlerta(true);
            return;
        }
        if(correo.trim() === ""){
            setMensaje("Dbe ingrear un correo valido");
            setTipoAlerta("danger")
            setMostrarAlerta(true);
            return;
        }
        if(password === ""){
            setMensaje("Debe ingresar una contraseña");
            setTipoAlerta("danger")
            setMostrarAlerta(true);
            return;
        }
        if(confirmarPassword === ""){
            setMensaje("Debe confirmar su contraseña");
            setTipoAlerta("danger")
            setMostrarAlerta(true);
            return;
        }

        if(password !== confirmarPassword){
            setMensaje("Las contraseñas no coinciden");
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return;
        }

        setMensaje("Registro completado exitosamente");
        setTipoAlerta("success");
        setMostrarAlerta(false);
    };
    return(
        <div className="container mt-4">
            <h1>Registro</h1>
                <AppAlert
                    mostrar={mostrarAlerta}
                    cerrar={() => setMostrarAlerta(false)}
                    variant={tipoAlerta}
                    msg={mensaje}/>
                <form onSubmit={validarFormulario}>
            
                    <div className="mb-3">
                        <label className="form-label">RUT</label>
                        <input type="text" className="form-control" placeholder="11.111.111-1"
                        value={rut} onChange={(e) => setRut(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" 
                        value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Apellidos</label>
                        <input type="text" className="form-control" 
                        value={apellidos} onChange={(e) => setApellidos(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Fecha de Nacimiento</label>
                        <input type="text" className="form-control" placeholder="00/00/0000"
                        value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Region</label>
                        <select type="text" className="form-control" 
                        value={region} onChange={(e) => setRegion(e.target.value)}>
                            <option value="">Seleccione una Region</option>
                            <option value="metropolitana">Metropolitana</option>
                            <option value="valparaiso">Valparaiso</option>
                            <option value="ohiggins">O'Higgins</option>
                            <option value="maule">Maule</option>
                            <option value="biobio">BioBio</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Comuna</label>
                        <input type="text" className="form-control" placeholder="Ingrese su comuna"
                        value={comuna} onChange={(e) => setComuna(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input type="text" className="form-control" 
                        value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="text" className="form-control" placeholder="************"
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirmar Contraseña</label>
                        <input type="text" className="form-control" 
                        value={confirmarPassword} onChange={(e) => setConfirmarPassword(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Telefono</label>
                        <input type="text" className="form-control" 
                        value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Codigo promocional</label>
                        <input type="text" className="form-control" 
                        value={codigoPromocional} onChange={(e) => setCodigoPromocional(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={validarFormulario}>
                        Registrarse
                    </button>
                </form>
        </div>
    );
}

export default Registro;