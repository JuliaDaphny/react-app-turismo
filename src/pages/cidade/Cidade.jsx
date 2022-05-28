import React, { useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import CidadeService from '../../services/academico/Cidade';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup' 
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';

const Cidade = () => {
  
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

  const CidadeV = Yup.object().shape({
    nome:Yup.string().min(5, 'Nome muito pequeno!').max(25, 'Nome muito grande!').required('Campo obrigatório'),
    descricao:Yup.string().min(100, 'Nome muito pequeno!').max(500, 'Nome muito grande!').required('Campo obrigatório'),
    localizacao:Yup.string().min(10, 'Nome muito pequeno!').max(100, 'Nome muito grande!').required('Campo obrigatório'),
    lingua:Yup.string().min(5, 'Nome muito pequeno!').max(20, 'Nome muito grande!').required('Campo obrigatório'),
    clima:Yup.string().min(5, 'Nome muito pequeno!').max(20, 'Nome muito grande!').required('Campo obrigatório'),
    curiosidade:Yup.string().min(25, 'Nome muito pequeno!').max(100, 'Nome muito grande!'),
    territorio:Yup.string().min(5, 'Nome muito pequeno!').max(20, 'Nome muito grande!').required('Campo obrigatório'),
  })

  return (
    <div>
      <h1>Cidade</h1>

      <Form >

        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", CidadeV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control isInvalid={errors.descricao} type="text" {...register("descricao", CidadeV.descricao)} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="localizacao">
          <Form.Label>Localização: </Form.Label>
          <Form.Control isInvalid={errors.localizacao} type="text" {...register("localizacao", CidadeV.localizacao)} />
          {errors.localizacao && <span>{errors.localizacao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="lingua">
          <Form.Label>Língua Nativa: </Form.Label>
          <Form.Control isInvalid={errors.lingua} type="text" {...register("lingua", CidadeV.lingua)} />
          {errors.lingua && <span>{errors.lingua.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="clima">
          <Form.Label>Clima: </Form.Label>
          <Form.Control isInvalid={errors.clima} type="text" {...register("clima", CidadeV.clima)} />
          {errors.clima && <span>{errors.clima.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="curiosidade">
          <Form.Label>Curiosidades: </Form.Label>
          <Form.Control isInvalid={errors.curiosidade} type="text" {...register("curiosidade", CidadeV.curiosidade)} />
          {errors.curiosidade && <span>{errors.curiosidade.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="territorio">
          <Form.Label>Territorio: </Form.Label>
          <Form.Control isInvalid={errors.territorio} type="text" {...register("territorio", CidadeV.territorio)} />
          {errors.territorio && <span>{errors.territorio.message}</span>}
        </Form.Group>

        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Cidade