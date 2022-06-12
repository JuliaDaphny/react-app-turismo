import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EventoService from '../../services/academico/Entretenimento';
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const DetalheEntretenimento = (item) => {

    function apagar(id) {
        if (window.confirm('Deseja realmente excluir?')) {
            EventoService.delete(id)
        }
    }

    return (
        <div>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                    <Card.Title>{item.nome}</Card.Title>
                    <Card.Text>
                        {item.descricao}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{item.cidade}</ListGroupItem>
                    <ListGroupItem>{item.data}</ListGroupItem>
                    <ListGroupItem>{item.localizacao}</ListGroupItem>
                    <ListGroupItem>{item.descricao}</ListGroupItem>
                    <ListGroupItem>{item.preco}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to={'/entretenimento' + item.id}><BsPencilFill /></Link>{' '}
                    <BsTrash onClick={() => apagar(item.id)} className='text-danger' />
                </Card.Body>
            </Card>
        </div>
    )
}

export default DetalheEntretenimento