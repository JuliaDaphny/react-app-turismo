import React, { useEffect, useState } from 'react'
import TuristicoService from '../../services/ser/Turistico';
import DetalheTuristico from '../../components/cardsDetalhes/DetalheTuristico';
import { useParams } from 'react-router-dom';

const TuristicoDetalhe = () => {
  const [turistico, setTuristico] = useState([])
  const params = useParams()

  useEffect(() => {
    setTuristico(TuristicoService.getAll()[params.id])
  }, [params])

  if (typeof turistico == 'undefined') {
    return (<div></div>)
  }

  return (
    <div>
      <DetalheTuristico
        id={params.id}
        nome={turistico.nome}
        cidade={turistico.cidade}
        pais={turistico.pais}
        funcionamento={turistico.funcionamento}
        localizacao={turistico.localizacao}
        descricao={turistico.descricao}
        informacao={turistico.informacao}
        preco={turistico.preco}
      />
    </div>
  )
}

export default TuristicoDetalhe