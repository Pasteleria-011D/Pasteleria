import {NavLink} from 'react-router-dom';

function Navbar({carrito}){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

                <NavLink className="navbar-brand" to="/index">Pastelería Mil Sabores</NavLink>

                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/index">Inicio</NavLink>
                    <NavLink className="nav-link" to="/catalogo">Catalogo</NavLink>
                    <NavLink className="nav-link" to="/blog">Blogs</NavLink>
                    <NavLink className="nav-link" to="/nuestraHistoria">Historia</NavLink>
                    <NavLink className="nav-link" to="/login">Inicio Sesion</NavLink>
                    <NavLink className="nav-link" to="/registro">Registrate</NavLink>
                    <NavLink className="nav-link" to="/contacto">Contactanos</NavLink>
                    <NavLink className="nav-link" to="/carrito">Carrito ({carrito.length})</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;