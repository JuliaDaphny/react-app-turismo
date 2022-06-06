import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import CidadeService from '../../services/academico/Cidade';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';

const CardCidade = (item) => {

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
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.nome}</Card.Title>
                    <Link to={'/cidade/:id'} className='btn btn-success botao'><BsFillEyeFill /></Link>
                    <Link to={'/cidade/update/id:'} className='btn btn-primary botao'><BsFillBrushFill /></Link>
                    <Button className='btn btn-danger' onClick={() => apagar(item.id)}><BsTrashFill /></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardCidade