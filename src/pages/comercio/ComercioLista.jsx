import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import ComercioService from '../../services/academico/Comercio';
import CardComercio from '../../components/cardsDetalhes/CardComercio';

const ComercioLista = () => {
  const [comercio, setCidade] = useState([])

  useEffect(() => {
    setCidade(ComercioService.getAll())
  }, [])

  return (
    <div>
      <h1>Lista do comércio das cidades</h1>

      <Link className='btn btn-info mb-3' to={'/comercio/create'}><FaPlus /> Novo</Link>
      {comercio.map((item, i) => (
        <CardComercio
          id={i}
          nome={item.nome}
          descricao={item.descricao}
          cidade={item.cidade}
          localizacao={item.localizacao}
          funcionamento={item.funcionamento}
        />
      ))}
    </div>
  )
}

export default ComercioLista;