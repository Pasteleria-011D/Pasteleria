
function NuestraHistoria() {
    return (
        <div className="container mt-4 mb-5">
            <div className="text-center mb-5">
                <h1>Nuestra Historia</h1>
                <p>
                    Descubre la historia de nuestra pastelería y los sabores
                    que nos definen.
                </p>
            </div>

            <section className="card mb-4">
                <div className="card-body">
                    <h2>Nuestros Inicios</h2>

                    <p>
                        Hace 50 años nació Pastelería 1000 Sabores con el sueño
                        de llevar a los hogares chilenos lo mejor de la
                        repostería artesanal. Desde nuestros primeros días
                        horneando recetas tradicionales, nos hemos dedicado
                        a acompañar a familias en sus momentos más especiales.
                        A lo largo de nuestra trayectoria hemos evolucionado
                        sin perder la esencia que nos caracteriza. Hoy nos
                        renovamos digitalmente para llevar nuestra propuesta
                        a todo Chile, adaptándonos a las nuevas generaciones
                        y manteniendo viva la tradición.
                    </p>

                    <img
                        src="/img/imagen-central.png"
                        className="img-fluid rounded"
                        alt="Historia de Pastelería Mil Sabores"
                    />
                </div>
            </section>

            <section className="card mb-4">
                <div className="card-body">
                    <h2>Hitos y Logros</h2>

                    <p>
                        En <strong>1995</strong>, nuestra pastelería escribió
                        un hito importante en la gastronomía del país al
                        participar en la elaboración de la{" "}
                        <strong>Torta más grande del mundo</strong>. Este
                        logro nos otorgó el reconocido{" "}
                        <strong>Récord Guinness</strong> y nos posicionó
                        como una de las pastelerías más reconocidas del país.
                    </p>
                </div>
            </section>

            <section className="card mb-4">
                <div className="card-body">
                    <h2>Misión y Visión</h2>

                    <h3 className="mt-3">Nuestra Misión</h3>
                    <p>
                        Ofrecer una experiencia dulce y memorable a nuestros
                        clientes, proporcionando tortas y productos de
                        repostería de alta calidad para todas las ocasiones,
                        mientras celebramos nuestras raíces históricas y
                        fomentamos la creatividad en la repostería.
                    </p>

                    <h3 className="mt-3">Nuestra Visión</h3>
                    <p>
                        Convertirnos en la tienda online líder de productos
                        de repostería en Chile, conocida por nuestra
                        innovación, calidad y el impacto positivo en la
                        comunidad, especialmente en la formación de nuevos
                        talentos en gastronomía.
                    </p>
                </div>
            </section>

            <section className="text-center mt-5">
                <h2>Desarrolladores</h2>

                <p>
                    Este sitio fue desarrollado como parte de un proyecto
                    académico, aplicando conocimientos de Desarrollo Web,
                    HTML, CSS y JavaScript.
                </p>

                <div className="card mx-auto" style={{ maxWidth: "350px" }}>
                    <div className="card-body">
                        <h3>Rayen Yanjari</h3>
                        <p>Desarrolladora Web</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NuestraHistoria;
