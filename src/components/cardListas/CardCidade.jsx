import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import CidadeService from '../../services/Cidade';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';

const CardCidade = (cidade) => {

    function apagar(id) {
        swal({
            title: "Tem certeza?",
            text: "Uma vez excluído, você não será capaz de recuperar este arquivo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((podeApagar) => {
            if (podeApagar) {
                CidadeService.delete(id)
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
                <Card.Title>{cidade.nome}</Card.Title>
                <Link to={'/cidade/' + cidade.id} className='btn btn-light botao'><BsFillEyeFill /></Link>
                <Link to={'/cidade/update/' + cidade.id} className='btn btn-light botao'><BsFillBrushFill /></Link>
                <Button className='btn btn-light' onClick={() => apagar(cidade.id)}><BsTrashFill /></Button>
            </Card.Body>
        </Card>
    )
}

export default CardCidade