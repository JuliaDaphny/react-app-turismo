import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import ComercioService from '../../services/academico/Comercio';
import DetalheComercio from '../../components/cardsDetalhes/DetalheComercio';

const ComercioDetalhe = () => {
  const [comercio, setCidade] = useState([])

  useEffect(() => {
    setCidade(ComercioService.getAll())
  }, [])

  return (
    <div>
      <h1>Lista do comércio das cidades</h1>

      <Link className='btn btn-info mb-3' to={'/comercio/create'}><FaPlus /> Novo</Link>
      {comercio.map((item, i) => (
        <DetalheComercio
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

export default ComercioDetalhe;