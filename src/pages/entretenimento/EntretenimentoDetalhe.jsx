import React, { useEffect, useState } from 'react'
import EntretenimentoService from '../../services/ser/Entretenimento';
import DetalheEntretenimento from '../../components/cardsDetalhes/DetalheEntretenimento';
import { useParams } from 'react-router-dom';

const EntretenimentoDetalhe = () => {
    const [entretenimento, setEntretenimento] = useState([])
    const params = useParams()

    useEffect(() => {
        setEntretenimento(EntretenimentoService.getAll()[params.id])
    }, [params])


    if (typeof entretenimento == 'undefined') {
        return (<div></div>)
    }

    return (
        <div>
            <DetalheEntretenimento
                id={params.id}
                nome={entretenimento.nome}
                cidade={entretenimento.cidade}
                data={entretenimento.data}
                localizacao={entretenimento.localizacao}
                descricao={entretenimento.descricao}
                preco={entretenimento.preco}
                informacao={entretenimento.informacao}
            />
        </div>
    )
}

export default EntretenimentoDetalhe

