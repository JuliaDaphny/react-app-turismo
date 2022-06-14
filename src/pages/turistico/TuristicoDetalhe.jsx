import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TuristicoService from '../../services/Turistico';
import DetalheTuristico from '../../components/cardsDetalhes/DetalheTuristico';

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
        funcionamento={turistico.funcionamento} //mask
        localizacao={turistico.localizacao}
        descricao={turistico.descricao}
        informacao={turistico.informacao}
        preco={turistico.preco} //mask
      />
    </div>
  )
}

export default TuristicoDetalhe