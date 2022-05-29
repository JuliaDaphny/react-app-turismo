import { Button } from 'bootstrap';
import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import EventoService from '../../services/academico/Evento';
import * as Yup from 'yup' 
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Evento = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const evento = EventoService.get(params.id)

      for (let campo in evento) {
        setValue(campo, evento[campo])
      }
    }
  }, [params.id, setValue])

  function salvar(dados) {

    if (params.id) {
      EventoService.update(params.id, dados)
    } else {
      EventoService.create(dados)
    }

    navigate('/evento')
  }

  const EventoV = Yup.object().shape({
    nome:Yup.string().min(5, 'Nome muito pequeno!').max(25, 'Nome muito grande!').required('Campo obrigatório'),
    descricao:Yup.string().min(50, 'Nome muito pequeno!').max(100, 'Nome muito grande!').required('Campo obrigatório'),
    localizacao:Yup.string().min(10, 'Nome muito pequeno!').max(50, 'Nome muito grande!').required('Campo obrigatório'),
    data:Yup.string().min(5, 'Nome muito pequeno!').max(10, 'Nome muito grande!').required('Campo obrigatório'),
    preco:Yup.string().min(5, 'Nome muito pequeno!').max(10, 'Nome muito grande!').required('Campo obrigatório'),
    cidade:Yup.string().min(10, 'Nome muito pequeno!').max(50, 'Nome muito grande!'),
  })

  return (

    <div>
      <h1>Eventos</h1>

      <Form >

        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", EventoV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control isInvalid={errors.descricao} type="text" {...register("descricao", EventoV.descricao)} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="localizacao">
          <Form.Label>Localização: </Form.Label>
          <Form.Control isInvalid={errors.localizacao} type="text" {...register("localizacao", EventoV.localizacao)} />
          {errors.localizacao && <span>{errors.localizacao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data do evento: </Form.Label>
          <Form.Control isInvalid={errors.data} type="text" {...register("data", EventoV.data)} />
          {errors.data && <span>{errors.data.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="preco">
          <Form.Label>Valor do evento: </Form.Label>
          <Form.Control isInvalid={errors.preco} type="text" {...register("preco", EventoV.preco)} />
          {errors.preco && <span>{errors.preco.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Cidade da atração: </Form.Label>
          <Form.Control isInvalid={errors.cidade} type="text" {...register("cidade", EventoV.cidade)} />
          {errors.cidade && <span>{errors.cidade.message}</span>}
        </Form.Group>
        
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Evento;