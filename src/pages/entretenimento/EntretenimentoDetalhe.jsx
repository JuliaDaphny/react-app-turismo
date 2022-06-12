import React, { useEffect, useState } from 'react'
import DetalheEntretenimento from '../../components/cardsDetalhes/DetalheEntretenimento';
import EntretenimentoService from '../../services/academico/Entretenimento';

const EntretenimentoDetalhe = () => {
    const [entretenimento, setEntretenimento] = useState([])

    useEffect(() => {
        setEntretenimento(EntretenimentoService.getAll())
    }, [])

    return (
        <div>
            {entretenimento.map((item, i) => (
                <DetalheEntretenimento
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

export default EntretenimentoDetalhe

