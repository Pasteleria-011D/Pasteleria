import { useState } from "react";

function Login(){
    const [correo, setCorreo] = useState("");
    const [password, setpassword] = useState("");
    const [mensaje, setMensaje] = useState("");
    return(
        <div className="container mt-4">
            <div className="row justify-center">
                <div className="col-6">
                    <h1 className="text-center mb-4">Iniciar Sesion</h1>

                    <form onSubmit={(e) => {e.preventDefault(); 
                        if (correo === "" || password === "") {
                            setMensaje("Debes completar todos los campos");
                            return;
                        }
                        setMensaje("Inicio de sesion realizado correctamente");
                    }}>
                        <div className="mb-3">
                            <label className="form-label">
                                Correo Electronico
                            </label>
                            <input type="email" className="form" placeholder="correo@ejemplo.com"
                            value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Contraseña
                            </label>
                            <input type="password" className="form" placeholder="**********"
                            value={password} onChange={(e) => setpassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Iniciar Sesion
                        </button>
                        {mensaje && (
                            <p className="text-success mt-3 text-center">
                                {mensaje}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;