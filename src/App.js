import React from "react";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comentarios from "./pages/comentarios/comentario";
import Contatos from "./pages/contatos/contatos";
import Fotos from "./pages/fotos/fotos";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home />}></Route>
      <Route path="/comentarios" element= {<Comentarios />}></Route>
      <Route path="/contatos" element= {<Contatos />}></Route>
      <Route path="/fotos" element= {<Fotos />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
