import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Inicio from "./paginas/Index";
import Catalogo from "./paginas/Catalogo";
import Blogs from "./paginas/Blogs";
import Historia from "./paginas/NuestraHistoria";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Contacto from "./paginas/Contacto";
import Carrito from "./paginas/Carrito";
import { useState } from "react";
import DetalleProducto from "./paginas/DetalleProducto";
import BlogDetalle from "./paginas/BlogDetalle";


function App(){
  const [carrito, setCarrito] = useState([]);
  return(
    <BrowserRouter>
      <Navbar carrito={carrito}/>
        <Routes>
          <Route path="/" element={<Navigate to="/index" replace />} />
          <Route path="/index" element={<Inicio setCarrito={setCarrito} />} />
          <Route path="/catalogo" element={<Catalogo carrito={carrito} setCarrito={setCarrito}/>}/>
          <Route path="/blog" element={<Blogs />} />
          <Route path="/nuestraHistoria" element={<Historia />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito}/>} />
          <Route path="/detalleProducto/:id" element={<DetalleProducto setCarrito={setCarrito}/>}/>
          <Route path="/blogDetalle" element={<BlogDetalle />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;