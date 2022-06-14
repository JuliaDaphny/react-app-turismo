import React, { useEffect, useState } from 'react'
import CidadeService from '../../services/ser/Cidade';
import DetalheCidade from '../../components/cardsDetalhes/DetalheCidade';
import { useParams } from 'react-router-dom';

const CidadeDetalhe = () => {
  const [cidade, setCidade] = useState([])
  const params = useParams()

  useEffect(() => {
    setCidade(CidadeService.getAll()[params.id])
  }, [params])

  if (typeof cidade == 'undefined') {
    return (<div></div>)
  }

  return (
    <div>
      <DetalheCidade
        id={params.id}
        nome={cidade.nome}
        descricao={cidade.descricao}
        curiosidade={cidade.curiosidade}
        lingua={cidade.lingua}
        localizacao={cidade.localizacao}
        clima={cidade.clima}
        territorio={cidade.territorio}
      />
    </div>
  )
}

export default CidadeDetalhe
