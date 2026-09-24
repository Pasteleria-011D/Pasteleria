import {Link} from "react-router-dom";
function Header(){
    return (
        <header className="header">
            <div className="title">
                <span><h2>PASTELERIA MIL SABORES</h2></span>
            </div>
            <nav className="nav">
                <Link to="/Index">Inicio</Link>
                <Link to="/catalogo">Catalogo</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/nuestra-historia">Nuestra Historia</Link>
                <Link to="/login">Inicio Sesion</Link>
                <Link to="/registro">Registrate</Link>
                <Link to="/contacto">Contactanos</Link>
            </nav>
            <div className="cart">
                <a href="paginas/carrito.jsx"><img src="img/carrito.png"></img>Carrito</a>
            </div>
        </header>
    );
}

export default Header;