import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import EntretenimentoService from '../../services/academico/Entretenimento';
import * as Yup from 'yup'
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EntretenimentoForm = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const entretenimento = EntretenimentoService.get(params.id)

      for (let campo in entretenimento) {
        console.log(entretenimento, campo)
        setValue(campo, entretenimento[campo])
      }
    }
  }, [params.id, setValue])

  function salvar(dados) {

    if (params.id) {
      EntretenimentoService.update(params.id, dados)
    } else {
      EntretenimentoService.create(dados)
    }

    navigate('/entretenimento')
  }

  const EntretenimentoV = Yup.object().shape({
    nome: Yup.string().min(5, 'Nome muito pequeno!').max(25, 'Nome muito grande!').required('Campo obrigatório'),
    descricao: Yup.string().min(50, 'Nome muito pequeno!').max(100, 'Nome muito grande!').required('Campo obrigatório'),
    localizacao: Yup.string().min(10, 'Nome muito pequeno!').max(50, 'Nome muito grande!').required('Campo obrigatório'),
    data: Yup.string().min(5, 'Nome muito pequeno!').max(10, 'Nome muito grande!').required('Campo obrigatório'),
    preco: Yup.string().min(5, 'Nome muito pequeno!').max(10, 'Nome muito grande!').required('Campo obrigatório'),
    cidade: Yup.string().min(10, 'Nome muito pequeno!').max(50, 'Nome muito grande!'),
  })

  return (

    <div>
      <h1 className='titulo-cidade'>Cadastre uma novo entretenimento</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", EntretenimentoV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control isInvalid={errors.descricao} type="text" {...register("descricao", EntretenimentoV.descricao)} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="localizacao">
          <Form.Label>Localização: </Form.Label>
          <Form.Control isInvalid={errors.localizacao} type="text" {...register("localizacao", EntretenimentoV.localizacao)} />
          {errors.localizacao && <span>{errors.localizacao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data do evento: </Form.Label>
          <Form.Control isInvalid={errors.data} type="text" {...register("data", EntretenimentoV.data)} />
          {errors.data && <span>{errors.data.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="preco">
          <Form.Label>Valor do evento: </Form.Label>
          <Form.Control isInvalid={errors.preco} type="text" {...register("preco", EntretenimentoV.preco)} />
          {errors.preco && <span>{errors.preco.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Cidade da atração: </Form.Label>
          <Form.Control isInvalid={errors.cidade} type="text" {...register("cidade", EntretenimentoV.cidade)} />
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

export default EntretenimentoForm