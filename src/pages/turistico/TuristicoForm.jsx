import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import TuristicoService from '../../services/academico/Turistico';
import * as Yup from 'yup'
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';

const TuristicoForm = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const turistico = TuristicoService.get(params.id)

      for (let campo in turistico) {
        setValue(campo, turistico[campo])
      }
    }
  }, [params.id, setValue])

  function salvar(dados) {

    if (params.id) {
      TuristicoService.update(params.id, dados)
    } else {
      TuristicoService.create(dados)
    }

    navigate('/turistico')
  }

  const TuristicoV = Yup.object().shape({
    nome:Yup.string().min(5, 'Nome muito pequeno!').max(25, 'Nome muito grande!').required('Campo obrigatório'),
    descricao:Yup.string().min(100, 'Nome muito pequeno!').max(500, 'Nome muito grande!').required('Campo obrigatório'),
    localizacao:Yup.string().min(10, 'Nome muito pequeno!').max(100, 'Nome muito grande!').required('Campo obrigatório'),
    cidade:Yup.string().min(5, 'Nome muito pequeno!').max(20, 'Nome muito grande!').required('Campo obrigatório'),
    funcionamento:Yup.date().min(5, 'Nome muito pequeno!').max(10, 'Nome muito grande!').required('Campo obrigatório'),
  })

  return (
    <div>
      <h1 className='titulo-cidade'>Cadastre um novo ponto turistico</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", TuristicoV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control isInvalid={errors.descricao} type="text" {...register("descricao", TuristicoV.descricao)} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="localizacao">
          <Form.Label>Localização: </Form.Label>
          <Form.Control isInvalid={errors.localizacao} type="text" {...register("localizacao", TuristicoV.localizacao)} />
          {errors.localizacao && <span>{errors.localizacao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="funcionamento">
          <Form.Label>Horário de funcinamento: </Form.Label>
          <Form.Control isInvalid={errors.funcionamento} type="text" {...register("funcionamento", TuristicoV.funcionamento)} />
          {errors.funcionamento && <span>{errors.funcionamento.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Cidade: </Form.Label>
          <Form.Control isInvalid={errors.cidade} type="text" {...register("cidade", TuristicoV.cidade)} />
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

export default TuristicoForm