import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import CidadeLista from "./pages/cidade/CidadeLista";
import EntretenimentoLista from "./pages/entretenimento/EntretenimentoLista";
import TuristicoLista from "./pages/turistico/TuristicoLista";
import UsuarioLista from "./pages/usuario/UsuarioLista";
import CidadeForm from "./pages/cidade/CidadeForm";
import CidadeDetalhe from "./pages/cidade/CidadeDetalhe";
import Home from "./pages/home/Home";
import EntretenimentoDetalhe from "./pages/entretenimento/EntretenimentoDetalhe";
import EntretenimentoForm from "./pages/entretenimento/EntretenimentoForm";
import ComercioDetalhe from "./pages/comercio/ComercioDetalhe";
import ComercioForm from "./pages/comercio/ComercioForm";
import UsuarioForm from "./pages/usuario/UsuarioForm";
import TuristicoForm from "./pages/turistico/TuristicoForm";
import TuristicoDetalhe from "./pages/turistico/TuristicoDetalhe";
import ComercioLista from "./pages/comercio/ComercioLista";
import UsuarioLogin from "./pages/usuario/UsuarioLogin";


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
            <Route path="/cidade/update/:id" element={<CidadeForm />} />

            {/* Rotas das páginas entretenimento */}
            <Route path="/entretenimento/:id" element={<EntretenimentoDetalhe />} />
            <Route path="/entretenimento" element={<EntretenimentoLista />} />
            <Route path="/entretenimento/create" element={<EntretenimentoForm />} />
            <Route path="/entretenimento/update/:id" element={<EntretenimentoForm />} />

            {/* Rotas das páginas comercio */}
            <Route path="/comercio/:id" element={<ComercioDetalhe />} />
            <Route path="/comercio" element={<ComercioLista />} />
            <Route path="/comercio/create" element={<ComercioForm />} />
            <Route path="/comercio/update/:id" element={<ComercioForm />} />

            {/* Rotas das páginas de usuarios-adm */}
            <Route path="/usuario" element={<UsuarioLista />} />
            <Route path="/usuario/create" element={<UsuarioForm />} />
            <Route path="/usuario/update/:id" element={<UsuarioForm />} />
            <Route path="/usuario/login" element={<UsuarioLogin />} />

            {/* Rotas das páginas pontos turisticos */}
            <Route path="/turistico/:id" element={<TuristicoDetalhe />} />
            <Route path="/turistico" element={<TuristicoLista />} />
            <Route path="/turistico/create" element={<TuristicoForm />} />
            <Route path="/turistico/update/:id" element={<TuristicoForm />} />

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
