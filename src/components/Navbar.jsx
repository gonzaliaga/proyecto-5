import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MyNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/buscar/${searchTerm}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/inicio">Mi Proyecto Pokemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
          </Nav>
          <form className="d-flex ms-auto" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar Pokémon por nombre o ID"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button className="btn btn-outline-primary" type="submit">Buscar</button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;


