import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {

  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Cidades Históricas</Navbar.Brand>
          <Nav className="me-auto">

            <Link className="nav-link" to="/">Cidades</Link>
            <Link className="nav-link" to="/">Eventos</Link>
            <Link className="nav-link" to="/">Locais</Link>
            <Link className="nav-link" to="/">Pontos Turisticos</Link>
            <Link className="nav-link" to="/">Sua rota</Link>

            <NavDropdown title="Edit" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cidade">Cidades</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/evento">Eventos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/locais">Locais</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/turistico">Pontos Turisticos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/rota">Sua rota</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>

    </div>
  )

}

export default Menu