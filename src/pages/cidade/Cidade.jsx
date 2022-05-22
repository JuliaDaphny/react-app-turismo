import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import CidadeService from '../../services/academico/Cidade';
import CidadeV from '../../validators/cidadeV';
import { Link, useNavigate, useParams } from 'react-router-dom';

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

  return (
    <div>
      <h1>Cidade</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", CidadeV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
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