import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import TuristicoService from '../../services/academico/Turistico';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';

function CardTuristico(item) {

    function apagar(id) {
        if (swal({
            title: "Tem certeza?",
            text: "Uma vez excluído, você não será capaz de recuperar este arquivo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        ) {TuristicoService.delete(id) }
    }

    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body className='cor-card'>
                    <Card.Title>{item.nome}</Card.Title>
                    <Link to={'/turistico/:id'} className='btn btn-light botao'><BsFillEyeFill /></Link>
                    <Link to={'/turistico/update/id:'} className='btn btn-light botao'><BsFillBrushFill /></Link>
                    <Button className='btn btn-light' onClick={() => apagar(item.id)}><BsTrashFill /></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardTuristico