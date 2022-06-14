import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import ComercioService from '../../services/Comercio';
import { Link, useNavigate, useParams } from 'react-router-dom';
import comercioV from '../../components/validators/comercioV';
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
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", comercioV.nome)} className="shadow" />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Cidade: </Form.Label>
          <Form.Control isInvalid={errors.cidade} type="text" {...register("cidade", comercioV.cidade)} />
          {errors.cidade && <span>{errors.cidade.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="pais">
          <Form.Label>País: </Form.Label>
          <Form.Control isInvalid={errors.pais} type="text" {...register("pais", comercioV.pais)} />
          {errors.pais && <span>{errors.pais.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="funcionamento">
          <Form.Label>Horário de funcinamento: </Form.Label>
          <Form.Control isInvalid={errors.funcionamento} type="text" {...register("funcionamento", comercioV.funcionamento)} mask="99:99" onChange={handleChange} />
          {errors.funcionamento && <span>{errors.funcionamento.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="localizacao">
          <Form.Label>Localização: </Form.Label>
          <Form.Control isInvalid={errors.localizacao} type="text" {...register("localizacao", comercioV.localizacao)} />
          {errors.localizacao && <span>{errors.localizacao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", comercioV.telefone)} mask="(99) 9999-9999" onChange={handleChange}/>
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="informacao">
          <Form.Label>Mais informações: </Form.Label>
          <Form.Control isInvalid={errors.informacao} type="text" {...register("informacao", comercioV.informacao)} />
          {errors.informacao && <span>{errors.informacao.message}</span>}
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