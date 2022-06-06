import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ComercioService from '../../services/academico/Comercio';
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const CardComercio = (item) => {

    function apagar(id) {
        if (window.confirm('Deseja realmente excluir?')) {
            ComercioService.delete(id)
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
                    <ListGroupItem>{item.funcionamento}</ListGroupItem>
                    <ListGroupItem>{item.localizacao}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to={'/comercio/' + item.id}><BsPencilFill /></Link>{' '}
                    <BsTrash onClick={() => apagar(item.id)} className='text-danger' />
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComercio