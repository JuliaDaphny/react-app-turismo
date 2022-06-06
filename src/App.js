import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import CidadeLista from "./pages/cidade/CidadeLista";
import EntretenimentoLista from "./pages/entretenimento/EntretenimentoLista";
import Entretenimento from "./pages/entretenimento/Entretenimento";
import Comercio from "./pages/comercio/Comercio";
import ComercioLista from "./pages/comercio/ComercioLista";
import Turistico from "./pages/turistico/Turistico";
import TuristicoLista from "./pages/turistico/TuristicoLista";
import UsuarioLista from "./pages/usuario/UsuarioLista";
import Usuario from "./pages/usuario/Usuario";
import CidadeForm from "./pages/cidade/CidadeForm";
import CidadeDetalhe from "./pages/cidade/CidadeDetalhe";
import Home from "./pages/home/Home";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            
            {/* Rotas das páginas cidade */}
            <Route path="/" element={<Home />} />
            <Route path="/cidade" element={<CidadeLista />} />
            <Route path="/cidade/:id" element={<CidadeDetalhe />} />
            <Route path="/cidade/create" element={<CidadeForm />} />
            <Route path="/cidade/update/id:" element={<CidadeForm />} />

            {/* Rotas das páginas evento */}
            <Route path="/evento/:id" element={<Entretenimento />} />
            <Route path="/evento" element={<EntretenimentoLista />} />
            <Route path="/evento/create" element={<Entretenimento />} />
            <Route path="/evento/update/:id" element={<Entretenimento />} />

            {/* Rotas das páginas comercio */}
            <Route path="/comercio/:id" element={<Comercio />} />
            <Route path="/comercio" element={<ComercioLista />} />
            <Route path="/comercio/create" element={<Comercio />} />

            {/* Rotas das páginas de usuarios-adm */}
            <Route path="/usuario/:id" element={<Usuario />} />
            <Route path="/usuario" element={<UsuarioLista />} />
            <Route path="/usuario/create" element={<Usuario />} />

            {/* Rotas das páginas pontos turisticos */}
            <Route path="/turistico/:id" element={<Turistico />} />
            <Route path="/turistico" element={<TuristicoLista />} />
            <Route path="/turistico/create" element={<Turistico />} />

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
