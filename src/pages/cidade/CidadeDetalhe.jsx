import React, { useEffect, useState } from 'react'
import CidadeService from '../../services/academico/Cidade';
import DestalheCidade from '../../components/cardsDetalhes/DetalheCidade';


const CidadeDetalhe = () => {
  const [cidade, setCidade] = useState([])

  useEffect(() => {
    setCidade(CidadeService.getAll())
  }, [])

  return (
    <div>
          {cidade.map((item, i) => (
            <DestalheCidade 
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

export default CidadeDetalhe
