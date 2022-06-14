import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BsFillMenuButtonFill } from 'react-icons/bs'
// import MenuItemUsuario from './MenuItemUsuario';

const Menu = () => {

  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="/">Planeta Tour</Navbar.Brand>

          <Nav className="me-auto">
            <NavDropdown className='no-after objeto-menu'
              id="nav-dropdown-dark-example"
              title={<BsFillMenuButtonFill />}
              menuVariant="dark"
            >
              <NavDropdown.Item href="/cidade">Cidades</NavDropdown.Item>
              <NavDropdown.Item href="/entretenimento">Entretenimento</NavDropdown.Item>
              <NavDropdown.Item href="/comercio">Comercio</NavDropdown.Item>
              <NavDropdown.Item href="/turistico">Pontos Turisticos</NavDropdown.Item>
              <NavDropdown.Item href="/usuario">Usuário</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="justify-content-end ">
            <Nav.Link href="/cidade">Login</Nav.Link>
            {/* <MenuItemUsuario></MenuItemUsuario> */}
          </Nav>

        </Container>
      </Navbar>

    </div>
  )

}

export default Menu