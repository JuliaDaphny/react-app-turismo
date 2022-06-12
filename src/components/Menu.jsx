import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {

  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="/">Planeta Tour</Navbar.Brand>
          <Nav className="me-auto">

            <Link className="nav-link" to="/cidade">Cidades</Link>
            <Link className="nav-link" to="/entretenimento">Entretenimento</Link>
            <Link className="nav-link" to="/comercio">Comercio</Link>
            <Link className="nav-link" to="/turistico">Pontos Turisticos</Link>
            <Link className="nav-link" to="/usuario">ADM</Link>

          </Nav>
        </Container>
      </Navbar>

    </div>
  )

}

export default Menu