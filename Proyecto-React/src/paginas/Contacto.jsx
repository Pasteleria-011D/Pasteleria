function Contacto(){
    return(
        <div className="container mt-4">
            <div classNAme="card">
                <div className="card-body">
                    <h1>Contactanos</h1>
                    <p>Si tienes alguna duda, sugerencia o consulta. Escribenos</p>
                    <form>

                        <div className="mb-3">
                            <label htmlFor="nombreContacto" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombreContacto" placeholder="Ingresa tu nombre"/>
                            <small className="text-danger"></small>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="correoContacto" className="form-label">Correo Electronico</label>
                            <input type="email" className="form-control" id="correoContacto" placeholder="ejemplo@gmail.com"/>
                            <small className="text-danger"></small>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="comentario" className="form-label">Comentario</label>
                            <textarea className="form-control" id="comentario" maxlength="500" placeholder="Escribe tu comentario"></textarea>
                            <small className="text-danger"></small>
                        </div>

                        <button type="submit" className="btn btn-primary">Enviar</button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contacto;