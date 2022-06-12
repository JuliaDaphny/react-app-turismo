import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import TuristicoService from '../../services/academico/Turistico';
import DetalheTuristico from '../../components/cardsDetalhes/DetalheTuristico';

const TuristicoDetalhe = () => {
  const [turistico, setTuristico] = useState([])

  useEffect(() => {
    setTuristico(TuristicoService.getAll())
  }, [])

  return (
    <div>
      <h1>Lista do comércio das cidades</h1>

      <Link className='btn btn-info mb-3' to={'/turistico/create'}><FaPlus /> Novo</Link>
      {turistico.map((item, i) => (
        <DetalheTuristico
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

export default TuristicoDetalhe