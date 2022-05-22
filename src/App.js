import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import CidadeLista from "./pages/cidade/CidadeLista";
import Cidade from "./pages/cidade/Cidade";
import EventoLista from "./pages/evento/EventoLista";
import Evento from "./pages/evento/Evento";
import Locais from "./pages/locais/Locais";
import LocaisLista from "./pages/locais/LocaisLista";
import Rota from "./pages/rota/Rota";
import RotaLista from "./pages/rota/RotaLista";
import Turistico from "./pages/turistico/Turistico";
import TuristicoLista from "./pages/turistico/TuristicoLista";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>

            {/* Rotas das páginas cidade */}
            <Route path="/" element={<Cidade />} />
            <Route path="/cidade" element={<CidadeLista />} />
            <Route path="/cidade/create" element={<Cidade />} />

            {/* Rotas das páginas evento */}
            <Route path="/evento/:id" element={<Evento />} />
            <Route path="/evento" element={<EventoLista />} />
            <Route path="/evento/create" element={<Evento />} />

            {/* Rotas das páginas locais */}
            <Route path="/locais/:id" element={<Locais />} />
            <Route path="/locais" element={<LocaisLista />} />
            <Route path="/locais/create" element={<Locais />} />

            {/* Rotas das páginas lista */}
            <Route path="/rota/:id" element={<Rota />} />
            <Route path="/rota" element={<RotaLista />} />
            <Route path="/rota/create" element={<Rota />} />

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
