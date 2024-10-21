import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <h1>¡Bienvenido a la Pokedex!</h1>
            <img
                src="/pokeball.png"
                alt="Pikachu"
                className="landing-image"
            />
            <Link to="/inicio">
                <button className="btn btn-primary">Ir a la Pokedex</button>
            </Link>
        </div>
    );
};

export default LandingPage;
