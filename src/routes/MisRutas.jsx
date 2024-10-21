import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from '../components/PokemonList.jsx';
import PokemonDetail from '../components/PokemonDetail.jsx';
import Navbar from '../components/Navbar.jsx';  
import Footer from '../components/Footer.jsx';
import LandingPage from '../components/LandingPage.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inicio" element={<PokemonList />} />
        <Route path="/buscar/:searchTerm" element={<PokemonDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;