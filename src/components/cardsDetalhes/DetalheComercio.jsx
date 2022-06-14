import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircleFill } from 'react-icons/bs'

const DetalheComercio = (comercio) => {

    return (
        <div className='margem-do-quadrado'>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{comercio.nome}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cidade: {comercio.cidade}</ListGroupItem>
                                <ListGroupItem>País: {comercio.pais}</ListGroupItem>
                                <ListGroupItem>Horário de funcionamento: {comercio.funcionamento}</ListGroupItem>
                                <ListGroupItem>Localização: {comercio.localizacao}</ListGroupItem>
                                <ListGroupItem>Telefone: {comercio.telefone}</ListGroupItem>
                            </ListGroup>
                            <Accordion defaultActiveKey="1" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Mais Informações</Accordion.Header>
                                    <Accordion.Body>
                                        {comercio.informacao}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='py-3'>
                        <Link className='btn btn-dark' to={-1}><BsArrowLeftCircleFill /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetalheComercio