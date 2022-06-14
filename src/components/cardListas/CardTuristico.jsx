import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import TuristicoService from '../../services/ser/Turistico';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';

const CardTuristico = (turistico) => {

    function apagar(id) {
        swal({
            title: "Tem certeza?",
            text: "Uma vez excluído, você não será capaz de recuperar este arquivo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((podeApagar) => {
            if (podeApagar) {
                TuristicoService.delete(id)
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
                <Card.Title>{turistico.nome}</Card.Title>
                <Link to={'/turistico/' + turistico.id} className='btn btn-light botao'><BsFillEyeFill /></Link>
                <Link to={'/turistico/update/' + turistico.id} className='btn btn-light botao'><BsFillBrushFill /></Link>
                <Button className='btn btn-light' onClick={() => apagar(turistico.id)}><BsTrashFill /></Button>
            </Card.Body>
        </Card>
    )
}

export default CardTuristico