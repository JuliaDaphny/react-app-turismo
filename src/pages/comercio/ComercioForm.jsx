import { Form, Button } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ComercioService from '../../services/academico/Comercio';
import ComercioV from '../../components/validators/comercioV';
import { mask } from 'remask';

const ComercioForm = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const comercio = ComercioService.get(params.id)

      for (let campo in comercio) {
        setValue(campo, comercio[campo])
      }
    }
  }, [params.id, setValue])

  function salvar(dados) {

    if (params.id) {
      ComercioService.update(params.id, dados)
    } else {
      ComercioService.create(dados)
    }

    navigate('/comercio')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1 className='titulo-cidade'>Cadastre um novo comercio</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", ComercioV.nome)} className="shadow" />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control isInvalid={errors.descricao} type="text" {...register("descricao", ComercioV.descricao)} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="localizacao">
          <Form.Label>Localização: </Form.Label>
          <Form.Control isInvalid={errors.localizacao} type="text" {...register("localizacao", ComercioV.localizacao)} />
          {errors.localizacao && <span>{errors.localizacao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="funcionamento">
          <Form.Label>Horário de funcinamento: </Form.Label>
          <Form.Control isInvalid={errors.funcionamento} type="text" {...register("funcionamento", ComercioV.funcionamento)} mask="99/99/9999" onChange={handleChange}/>
          {errors.funcionamento && <span>{errors.funcionamento.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Cidade: </Form.Label>
          <Form.Control isInvalid={errors.cidade} type="text" {...register("cidade", ComercioV.cidade)} />
          {errors.cidade && <span>{errors.cidade.message}</span>}
        </Form.Group>

        <div className="text-center">
          <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success botao'><BsCheckCircleFill /></Button>{' '}
        </div>
      </Form>
    </div>
  )
}

export default ComercioForm