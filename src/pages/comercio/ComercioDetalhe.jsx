import React, { useEffect, useState } from 'react'
import ComercioService from '../../services/Comercio';
import DetalheComercio from '../../components/cardsDetalhes/DetalheComercio';
import { useParams } from 'react-router-dom';

const ComercioDetalhe = () => {
  const [comercio, setComercio] = useState([])
  const params = useParams()

  useEffect(() => {
    setComercio(ComercioService.getAll()[params.id])
  }, [params])

  if (typeof comercio == 'undefined') {
    return (<div></div>)
  }

  return (
    <div>
      <DetalheComercio
        id={params.id}
        nome={comercio.nome}
        cidade={comercio.cidade}
        pais={comercio.pais}
        funcionamento={comercio.funcionamento} //masck
        localizacao={comercio.localizacao}
        telefone={comercio.telefone} //masck
        informacao={comercio.informacao}
      />
    </div>
  )
}

export default ComercioDetalhe;