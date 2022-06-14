import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import EntretenimentoService from '../../services/Entretenimento';
import { Link, useNavigate, useParams } from 'react-router-dom';
import entretenimentoV from '../../components/validators/entretenimentoV';
import { mask } from 'remask';

const EntretenimentoForm = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const entretenimento = EntretenimentoService.get(params.id)

      for (let campo in entretenimento) {
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

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1 className='titulo-cidade'>Cadastre uma novo entretenimento</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" placeholder='Show do Sufak' {...register("nome", entretenimentoV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control isInvalid={errors.descricao} type="text" {...register("descricao", entretenimentoV.descricao)} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="localizacao">
          <Form.Label>Localização: </Form.Label>
          <Form.Control isInvalid={errors.localizacao} type="text" {...register("localizacao", entretenimentoV.localizacao)} />
          {errors.localizacao && <span>{errors.localizacao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data do evento: </Form.Label>
          <Form.Control isInvalid={errors.data} type="text" {...register("data", entretenimentoV.data)} mask="99/99/9999" onChange={handleChange} />
          {errors.data && <span>{errors.data.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="preco">
          <Form.Label>Valor do evento: </Form.Label>
          <Form.Control isInvalid={errors.preco} type="text" {...register("preco", entretenimentoV.preco)} mask="99,99" onChange={handleChange} />
          {errors.preco && <span>{errors.preco.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Cidade da atração: </Form.Label>
          <Form.Control isInvalid={errors.cidade} type="text" {...register("cidade", entretenimentoV.cidade)} />
          {errors.cidade && <span>{errors.cidade.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Mais informações: </Form.Label>
          <Form.Control isInvalid={errors.informacao} type="text" {...register("informacao", entretenimentoV.informacao)} />
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

export default EntretenimentoForm