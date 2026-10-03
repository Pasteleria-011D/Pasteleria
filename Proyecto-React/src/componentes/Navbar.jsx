import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

                <NavLink className="navbar-brand" to="/">Pastelería Mil Sabores</NavLink>

                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/Index">Inicio</NavLink>
                    <NavLink className="nav-link" to="/Catalogo">Catalogo</NavLink>
                    <NavLink className="nav-link" to="/Blog">Blogs</NavLink>
                    <NavLink className="nav-link" to="/NuestraHistoria">Historia</NavLink>
                    <NavLink className="nav-link" to="/Login">Inicio Sesion</NavLink>
                    <NavLink className="nav-link" to="/Registro">Registrate</NavLink>
                    <NavLink className="nav-link" to="/Contacto">Contactanos</NavLink>
                    <NavLink className="nav-link" to="/Carrito">Carrito</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;