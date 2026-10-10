
function BlogDetalle() {
    return (
        <main className="container mt-4 mb-5">
            <div className="text-center mb-5">
                <h1> nuestros Blogs</h1>
                <p>Consejos, historias y novedades de Pastelería Mil Sabores.</p>
            </div>

            <article className="card mb-5">
                <img src="/img/ingredientes.jpg" className="card-img-top" alt="Ingredientes para preparar pasteles"/>
                <div className="card-body">
                    <small className="text-muted">15 de Agosto de 2026</small>
                    <h2 className="mt-2">El arte de crear el pastel perfecto</h2>
                    <p>
                        Crear el pastel perfecto es una combinación de
                        tradición, creatividad y dedicación. En Pastelería
                        Mil Sabores cuidamos cada detalle para entregar
                        productos deliciosos y de calidad.
                    </p>
                    <h3>La importancia de los ingredientes</h3>
                    <p>
                        Seleccionamos ingredientes de calidad para conseguir
                        sabores equilibrados y texturas agradables. La
                        frescura de los huevos, la harina, la mantequilla
                        y el chocolate influye directamente en el resultado.
                    </p>
                    <h3>Tradición e innovación</h3>
                    <p>
                        Conservamos las recetas tradicionales que nos han
                        acompañado durante años, incorporando nuevas ideas,
                        decoraciones y combinaciones de sabores para ofrecer
                        experiencias dulces en cada celebración.
                    </p>
                </div>
            </article>

            <article className="card mb-5">
                <img src="/img/prudtos frescos.webp" className="card-img-top" alt="Ingredientes frescos para repostería"/>
                <div className="card-body">
                    <small className="text-muted">05 de Septiembre de 2026</small>
                    <h2 className="mt-2">
                        Los mejores consejos para mantener tus ingredientes frescos
                    </h2>
                    <p>
                        Mantener los ingredientes frescos es fundamental
                        para preparar pasteles sabrosos y de buena calidad.
                        Un almacenamiento adecuado ayuda a conservar sus
                        propiedades y evitar desperdicios.
                    </p>
                    <h3>Guarda cada ingrediente correctamente</h3>
                    <p>
                        Los productos refrigerados, como la crema y algunos
                        lácteos, deben mantenerse a la temperatura indicada.
                        La harina, el azúcar y otros ingredientes secos
                        deben guardarse en recipientes limpios, cerrados
                        y alejados de la humedad.
                    </p>
                    <h3>Revisa las fechas y la frescura</h3>
                    <p>
                        Antes de cocinar, revisa las fechas de vencimiento
                        y el estado de los ingredientes. Utiliza primero
                        los productos que llevan más tiempo almacenados,
                        siempre que estén en buenas condiciones.
                    </p>
                    <h3>Prepara tus pasteles con anticipación</h3>
                    <p>
                        Organiza tus ingredientes antes de comenzar y
                        conserva las preparaciones según sus necesidades.
                        Así podrás disfrutar de mejores resultados y
                        mantener la calidad de tus recetas.
                    </p>
                </div>
            </article>
        </main>
    );
}

export default BlogDetalle;
