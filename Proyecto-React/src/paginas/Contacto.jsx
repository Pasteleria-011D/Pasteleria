import {useState} from "react";

function Contacto(){
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [comentario, setComentario] = useState("");

    const [error, setError] = useState({});
    const [mensaje, setMensaje] = useState("");

    function validarFormulario(e){
        e.preventDefault();

        const nuevoError = {};

        if(nombre.trim() === ""){
            nuevoError.nombre = "Debes ingresar tu nombre";
        }

        if(correo.trim() === ""){
            nuevoError.correo = "Debes ingresar un correo";
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())){
            nuevoError.correo = "Debes ingresar un correo válido";
        }

        if(comentario.trim() === ""){
            nuevoError.comentario = "Debes ingresar un comentario";
        }

        setError(nuevoError);
        setMensaje("");

        if(Object.keys(nuevoError).length === 0){
            setMensaje("Mensaje enviado con éxito");
            setNombre("");
            setCorreo("");
            setComentario("");
        }
    }
    return(
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h1>Contactanos</h1>
                    <p>Si tienes alguna duda, sugerencia o consulta. Escribenos</p>
                    <form onSubmit={validarFormulario} noValidate>

                        <div className="mb-3">
                            <label htmlFor="nombreContacto" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombreContacto" placeholder="Ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                            {error.nombre && (<small className="text-danger">{error.nombre}</small>)}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="correoContacto" className="form-label">Correo Electronico</label>
                            <input type="email" className="form-control" id="correoContacto" placeholder="ejemplo@gmail.com" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                            {error.correo && (<small className="text-danger">{error.correo}</small>)}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="comentario" className="form-label">Comentario</label>
                            <textarea className="form-control" id="comentario" maxLength="500" placeholder="Escribe tu comentario" value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
                            <small className="text-muted">{comentario.length}/500 caracteres</small>
                            {error.comentario && (<small className="text-danger">{error.comentario}</small>)}
                        </div>

                        <button type="submit" className="btn btn-primary">Enviar</button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contacto;