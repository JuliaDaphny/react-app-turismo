import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import EventoService from '../../services/academico/Evento';
import CardEvento from '../../components/cards/CardEvento';

const EventoLista = () => {

  const [cidade, setCidade] = useState([])

  useEffect(() => {

    setCidade(EventoService.getAll())

  }, [])

  return (
    <div>
      <h1>Lista de eventos das cidades!</h1>

      <Link className='btn btn-info mb-3' to={'/evento/create'}><FaPlus /> Novo</Link>
      {cidade.map((item, i) => (
        <CardEvento
          id={i}
          nome={item.nome}
          descricao={item.descricao}
          cidade={item.cidade}
          data={item.data}
          localizacao={item.localizacao}
          preco={item.preco}
        />
      ))}
    </div>
  )
}

export default EventoLista;