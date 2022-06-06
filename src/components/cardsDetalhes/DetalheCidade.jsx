import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CidadeService from '../../services/academico/Cidade';
import { BsFillBrushFill, BsTrashFill, BsArrowLeftCircleFill} from 'react-icons/bs'
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';

const DestalheCidade = (item) => {

    function apagar(id) {
        if (swal({
            title: "Tem certeza?",
            text: "Uma vez excluído, você não será capaz de recuperar este arquivo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        ) { CidadeService.delete(id) }
    }
    
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
                    <Link className='btn btn-danger botao' to={'/cidade/update/:id' + item.id}><BsFillBrushFill /></Link>
                    <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
                    <Button className='btn btn-danger botao' onClick={() => apagar(item.id)}><BsTrashFill /></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DestalheCidade