import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill } from 'react-icons/bs'
import UsuarioService from '../../services/Usuario';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';

const CardUsuario = (usuario) => {

    function apagar(id) {
        swal({
            title: "Tem certeza?",
            text: "Uma vez excluído, você não será capaz de recuperar este arquivo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((podeApagar) => {
            if (podeApagar) {
                UsuarioService.delete(id)
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
                <Card.Title>{usuario.nome}</Card.Title>
                <Card.Title>{usuario.funcao}</Card.Title>
                <Card.Title>{usuario.dataDeCadastro}</Card.Title>
                <Card.Title>{usuario.telefone}</Card.Title>
                <Card.Title>{usuario.email}</Card.Title><br/>
                
                <Link to={'/usuario/update/' + usuario.id} className='btn btn-light botao'><BsFillBrushFill /></Link>
                <Button className='btn btn-light' onClick={() => apagar(usuario.id)}><BsTrashFill /></Button>
            </Card.Body>
        </Card>
    )
}

export default CardUsuario