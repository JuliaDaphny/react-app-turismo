import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircleFill } from 'react-icons/bs'

const DetalheCidade = (cidade) => {

    return (
        <div className='margem-do-quadrado'>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>{cidade.nome}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Lingua: {cidade.lingua}</ListGroupItem>
                                <ListGroupItem>Localização: {cidade.localizacao}</ListGroupItem>
                                <ListGroupItem>Clima: {cidade.clima}</ListGroupItem>
                                <ListGroupItem>País: {cidade.territorio}</ListGroupItem>
                                <ListGroupItem>Descrição: {cidade.descricao}</ListGroupItem>
                            </ListGroup>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Mais Informações</Accordion.Header>
                                    <Accordion.Body>
                                        {cidade.curiosidade}
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

export default DetalheCidade