import React from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircleFill } from 'react-icons/bs'

const DetalheUsuario = (usuario) => {

    return (
        <div className='margem-do-quadrado'>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{usuario.nome}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Função: {usuario.funcao}</ListGroupItem>
                                <ListGroupItem>E-mail: {usuario.email}</ListGroupItem>
                                <ListGroupItem>Data de cadastramento: {usuario.dataDeCadastro}</ListGroupItem>
                                <ListGroupItem>Telefone: {usuario.telefone}</ListGroupItem>
                                <ListGroupItem>Observações: {usuario.observacao}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='py-3'>
                        <Link className='btn btn-danger' to={-1}><BsArrowLeftCircleFill /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetalheUsuario