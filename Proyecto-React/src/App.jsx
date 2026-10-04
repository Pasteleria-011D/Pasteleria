import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Index from "./paginas/Index";
import Catalogo from "./paginas/Catalogo";
import Blogs from "./paginas/Blogs";
import Historia from "./paginas/NuestraHistoria";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Contacto from "./paginas/Contacto";
import Carrito from "./paginas/Carrito";
import { useState } from "react";

function App(){
  const [carrito, setCarrito] = useState([]);
  return(
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/catalogo" element={<Catalogo carrito={carrito} setCarrito={setCarrito}/>}/>
          <Route path="/blog" element={<Blogs />} />
          <Route path="/nuestraHistoria" element={<Historia />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito carrito={carrito}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;