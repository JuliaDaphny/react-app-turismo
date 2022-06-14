import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../components/css/Projeto.css"

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12}>1 of 1</Col>
          
          <Link to={'/cidade'}>Acessar a area de adm </Link>
        </Row>
      </Container>
    </div>
  )
}

export default Home