import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import CidadeService from '../../services/ser/Cidade';
import { Link, useNavigate, useParams } from 'react-router-dom';
import cidadeV from '../../components/validators/cidadeV';

const CidadeForm = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const cidade = CidadeService.get(params.id)

      for (let campo in cidade) {
        setValue(campo, cidade[campo])
      }
    }
  }, [params.id, setValue])

  function salvar(dados) {

    if (params.id) {
      CidadeService.update(params.id, dados)
    } else {
      CidadeService.create(dados)
    }

    navigate('/cidade')
  }

  return (
    <div>
      <h1 className='titulo-cidade'>Cadastre uma nova cidade</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" placeholder='Ravello' {...register("nome", cidadeV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control isInvalid={errors.descricao} type="text" {...register("descricao", cidadeV.descricao)} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="localizacao">
          <Form.Label>Localização: </Form.Label>
          <Form.Control isInvalid={errors.localizacao} type="text" {...register("localizacao", cidadeV.localizacao)} />
          {errors.localizacao && <span>{errors.localizacao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="lingua">
          <Form.Label>Língua Nativa: </Form.Label>
          <Form.Control isInvalid={errors.lingua} type="text" {...register("lingua", cidadeV.lingua)} />
          {errors.lingua && <span>{errors.lingua.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="territorio">
          <Form.Label>País: </Form.Label>
          <Form.Control isInvalid={errors.territorio} type="text" placeholder='França' {...register("territorio", cidadeV.territorio)} />
          {errors.territorio && <span>{errors.territorio.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="clima">
          <Form.Label>Clima: </Form.Label>
          <Form.Control isInvalid={errors.clima} type="text" placeholder='O clima de Brasília é o tropical' {...register("clima")} />
          {errors.clima && <span>{errors.clima.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="curiosidade">
          <Form.Label>Curiosidades: </Form.Label>
          <Form.Control isInvalid={errors.curiosidade} type="text" placeholder='Ex: vacas são veneradas e protegidas como animais sagrados' {...register("curiosidade")} />
          {errors.curiosidade && <span>{errors.curiosidade.message}</span>}
        </Form.Group>

        <div className="text-center">
          <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success botao'><BsCheckCircleFill /></Button>{' '}
        </div>
      </Form>

    </div>
  )
}

export default CidadeForm