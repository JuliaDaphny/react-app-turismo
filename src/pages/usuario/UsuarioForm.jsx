import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import UsuarioService from '../../services/Usuario';
import usuarioV from '../../components/validators/usuarioV';

const UsuarioForm = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const usuario = UsuarioService.get(params.id)

      for (let campo in usuario) {
        setValue(campo, usuario[campo])
      }
    }
  }, [params.id, setValue])

  function salvar(dados) {

    if (params.id) {
      UsuarioService.update(params.id, dados)
    } else {
      UsuarioService.create(dados)
    }

    navigate('/usuario')
  }

  return (

    <div>
      <h1 className='titulo-cidade'>Cadastre um novo administrador</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", usuarioV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="funcao">
          <Form.Label>Função: </Form.Label>
          <Form.Control isInvalid={errors.funcao} type="text" {...register("funcao", usuarioV.funcao)} />
          {errors.funcao && <span>{errors.funcao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="dataDeCadastro">
          <Form.Label>Data de cadastro: </Form.Label>
          <Form.Control isInvalid={errors.dataDeCadastro} type="text" {...register("dataDeCadastro", usuarioV.dataDeCadastro)} />
          {errors.dataDeCadastro && <span>{errors.dataDeCadastro.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail: </Form.Label>
          <Form.Control isInvalid={errors.email} type="text" {...register("email", usuarioV.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        
        <div className="text-center">
          <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success botao'><BsCheckCircleFill /></Button>{' '}
        </div>
      </Form>

    </div>
  )
}

export default UsuarioForm