import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import UsuarioService from '../../services/ser/Usuario';
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import usuarioV from '../../components/validators/usuarioV'; 

const UsuarioLogin = () => {

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
      <h1 className='titulo-cidade'>Acesse como adminsitrador</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        <Form.Group className="mb-3" controlId="login">
          <Form.Label>Login: </Form.Label>
          <Form.Control isInvalid={errors.login} type="text" {...register("login", usuarioV.login)} />
          {errors.login && <span>{errors.login.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="senha">
          <Form.Label>Senha: </Form.Label>
          <Form.Control isInvalid={errors.senha} type="password" {...register("senha", usuarioV.senha)} />
          {errors.senha && <span>{errors.senha.message}</span>}
        </Form.Group>

        <div className="text-center">
          <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success botao'>Entrar</Button>{' '}
        </div>
      </Form>
    </div>
  )
}

export default UsuarioLogin