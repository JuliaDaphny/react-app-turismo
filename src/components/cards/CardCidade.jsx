import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CidadeService from '../../services/academico/Cidade';
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const CardCidade = (item) => {

    function apagar(id) {
        if(window.confirm('Deseja realmente excluir o registro?')){
          CidadeService.delete(id)
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
                    <ListGroupItem>{item.lingua}</ListGroupItem>
                    <ListGroupItem>{item.curiosidade}</ListGroupItem>
                    <ListGroupItem>{item.localizacao}</ListGroupItem>
                    <ListGroupItem>{item.clima}</ListGroupItem>
                    <ListGroupItem>{item.territorio}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to={'/cidade/' + item.id}><BsPencilFill /></Link>{' '}
                    <BsTrash onClick={() => apagar(item.id)} className='text-danger' />
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardCidade