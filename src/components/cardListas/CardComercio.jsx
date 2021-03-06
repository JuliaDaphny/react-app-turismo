import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import ComercioService from '../../services/Comercio';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';

const CardComercio = (comercio) => {

    function apagar(id) {
        swal({
            title: "Tem certeza?",
            text: "Uma vez excluído, você não será capaz de recuperar este arquivo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((podeApagar) => {
            if (podeApagar) {
                ComercioService.delete(id)
                swal("Bom trabalho!", "Você excluiu a cidade!", "success")
                    .then(function () { window.location.reload() });
            } else {
                swal("Tudo bem!", "Você decidiu não excluir a cidade!", "info");
            }
        })
    }

    return (
        <Card>
            <Card.Body className='cor-card'>
                <Card.Title>{comercio.nome}</Card.Title>
                <Link to={'/comercio/' + comercio.id} className='btn btn-light botao'><BsFillEyeFill /></Link>
                <Link to={'/comercio/update/' + comercio.id} className='btn btn-light botao'><BsFillBrushFill /></Link>
                <Button className='btn btn-light' onClick={() => apagar(comercio.id)}><BsTrashFill /></Button>
            </Card.Body>
        </Card>
    )
}

export default CardComercio