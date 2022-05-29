import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import LocaisService from '../../services/academico/Locais';
import CardLocais from '../../components/cards/CardLocais';

const LocaisLista = () => {
  const [locais, setCidade] = useState([])

  useEffect(() => {

    setCidade(LocaisService.getAll())

  }, [])

  return (
    <div>
      <h1>Lista do comércio das cidades</h1>

      <Link className='btn btn-info mb-3' to={'/locais/create'}><FaPlus /> Novo</Link>
      {locais.map((item, i) => (
        <CardLocais
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

export default LocaisLista;