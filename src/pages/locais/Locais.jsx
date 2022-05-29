import { Button } from 'bootstrap';
import { Form } from 'formik';
import React, { useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LocaisService from '../../services/academico/Locais';
import * as Yup from 'yup' 

const Locais = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const locais = LocaisService.get(params.id)

      for (let campo in locais) {
        setValue(campo, locais[campo])
      }
    }
  }, [params.id, setValue])

  function salvar(dados) {

    if (params.id) {
      LocaisService.update(params.id, dados)
    } else {
      LocaisService.create(dados)
    }

    navigate('/locais')
  }

  const LocaisV = Yup.object().shape({
    nome:Yup.string().min(5, 'Nome muito pequeno!').max(25, 'Nome muito grande!').required('Campo obrigatório'),
    descricao:Yup.string().min(100, 'Nome muito pequeno!').max(500, 'Nome muito grande!').required('Campo obrigatório'),
    localizacao:Yup.string().min(10, 'Nome muito pequeno!').max(100, 'Nome muito grande!').required('Campo obrigatório'),
    cidade:Yup.string().min(5, 'Nome muito pequeno!').max(20, 'Nome muito grande!').required('Campo obrigatório'),
    funcionamento:Yup.date().min(5, 'Nome muito pequeno!').max(10, 'Nome muito grande!').required('Campo obrigatório'),
  })

  return (
    <div>
      <h1>Comercio</h1>

      <Form >

        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", LocaisV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control isInvalid={errors.descricao} type="text" {...register("descricao", LocaisV.descricao)} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="localizacao">
          <Form.Label>Localização: </Form.Label>
          <Form.Control isInvalid={errors.localizacao} type="text" {...register("localizacao", LocaisV.localizacao)} />
          {errors.localizacao && <span>{errors.localizacao.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="funcionamento">
          <Form.Label>Horário de funcinamento: </Form.Label>
          <Form.Control isInvalid={errors.funcionamento} type="text" {...register("funcionamento", LocaisV.funcionamento)} />
          {errors.funcionamento && <span>{errors.funcionamento.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Cidade: </Form.Label>
          <Form.Control isInvalid={errors.cidade} type="text" {...register("cidade", LocaisV.cidade)} />
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

export default Locais;