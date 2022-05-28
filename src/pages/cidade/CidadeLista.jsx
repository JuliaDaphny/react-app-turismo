import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import CidadeService from '../../services/academico/Cidade';
import CardCidade from '../../components/cards/CardCidade'

const CidadeLista = () => {
  const [cidade, setCidade] = useState([])

  useEffect(() => {

    setCidade(CidadeService.getAll())

  }, [])

  return (
    <div>
      <h1>Lista de cidades</h1>

      <Link className='btn btn-info mb-3' to={'/cidade/create'}><FaPlus /> Novo</Link>
          {cidade.map((item, i) => (
            <CardCidade 
             id={i}
             nome={item.nome} 
             descricao={item.descricao}
             curiosidade={item.curiosidade}
             lingua={item.lingua}
             localizacao={item.localizacao}
             clima={item.clima}
             territorio={item.territorio}
            />
          ))}
    </div>
  )
}

export default CidadeLista
