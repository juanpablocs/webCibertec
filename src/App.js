import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AutosPage from "./pages/AutosPage";
import HogarPage from "./pages/HogarPage";
import HomePage from "./pages/HomePage";
import SaludPage from "./pages/SaludPage";
import DetailPage from "./pages/DetailPage";
import Prueba from './components/Prueba/Prueba';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/autos" element={<AutosPage />} />
        <Route path="/salud" element={<SaludPage />} />
        <Route path="/hogar" element={<HogarPage />} />
        <Route path="/detalle/:id" element={<DetailPage />} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
