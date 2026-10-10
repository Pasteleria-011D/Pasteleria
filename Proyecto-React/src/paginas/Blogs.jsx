import { Link } from "react-router-dom";

function Blogs() {
    const blogs = [
        {
            id: 1,
            imagen: "/img/ingredientes.jpg",
            fecha: "15 de Agosto de 2026",
            titulo: "El arte de crear el pastel perfecto",
            descripcion:
                "Descubre cómo seleccionamos nuestros ingredientes y combinamos tradición e innovación para crear deliciosos pasteles."
        },
        {
            id: 2,
            imagen: "/img/prudtos frescos.webp",
            fecha: "05 de Septiembre de 2026",
            titulo: "Los mejores consejos para mantener tus ingredientes frescos",
            descripcion:
                "Aprende algunos de nuestros sencillos consejos para lograr que tus pasteles queden deliciosos y frescos durante más tiempo."
        }
    ];
    return (
        <main className="container mt-4 mb-5">
            <section className="text-center mb-5">
                <h1>Nuestros Blogs</h1>
                <p>Descubre consejos, historias y novedades sobre Pasteleria Mil Sabores</p>
            </section>

            <div className="row">
                {blogs.map((blog) => (
                    <div className="col-md-6 mb-4" key={blog.id}>
                        <article className="card h-100">
                            <img src={blog.imagen} className="card-img-top" alt={blog.titulo}></img>
                            <div className="card-body">
                                <small className="text-muted">
                                    {blog.fecha}
                                </small>
                                <h2 className="cad-title mt-2">{blog.titulo}</h2>
                                <p className="card-text">{blog.descripcion}</p>
                                <Link to="/blogDetalle" className="btn btn-primary">Leer mas</Link>

                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Blogs;