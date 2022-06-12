import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import UsuarioService from '../../services/academico/Usuario';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';

function CardUsuario(item) {

    function apagar(id) {
        if (swal({
            title: "Tem certeza?",
            text: "Uma vez excluído, você não será capaz de recuperar este arquivo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        ) {UsuarioService.delete(id) }
    }

    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.nome}</Card.Title>
                    <Link to={'/usuario/:id'} className='btn btn-light botao'><BsFillEyeFill /></Link>
                    <Link to={'/usuario/update/id:'} className='btn btn-light botao'><BsFillBrushFill /></Link>
                    <Button className='btn btn-light' onClick={() => apagar(item.id)}><BsTrashFill /></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardUsuario