
import './App.css';
import Menu from './componentes/menu';

import './componentes/productos.css';
import './componentes/menu.css';

import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import PaginaPromociones from './paginas/paginaPromociones';
import PaginaContacto from './paginas/paginaContacto';
import PaginaPF from './paginas/paginaPF';
import PaginaQS from './paginas/paginaQS';
import PaginaInicio from './paginas/paginaInicio';
import PaginaApi from './paginas/paginaApi';
import PaginaFooter from "./paginas/paginaFooter";
import PaginaPerros from "./componentes/productos/paginaPerros";
import PaginaGatos from "./componentes/productos/paginaGatos";






function App() {
  return (
    <div className="container-flex bg-danger">
      <Router>
      <Menu/>
      
        <Routes>
          <Route path="/" element={<PaginaInicio/>}/>
          <Route path="/producto-perros" element={<PaginaPerros/>}/>
          <Route path="/producto-gatos" element={<PaginaGatos/>}/>
          <Route path="/promociones" element={<PaginaPromociones/>}/>
          <Route path="/quienes-somos" element={<PaginaQS/>}/>
          <Route path="/preguntas-frecuentes" element={<PaginaPF/>}/>
          <Route path="/contacto" element={<PaginaContacto/>}/>
          <Route path="/Perritos" element={<PaginaApi/>}/>
        </Routes>
      </Router>

      <PaginaFooter/>
      </div>


  );
}

export default App;
