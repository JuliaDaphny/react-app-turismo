import React, { useEffect, useState } from 'react'
import DetalheUsuario from '../../components/cardsDetalhes/DetalheUsuario';
import UsuarioService from '../../services/ser/Usuario';

const UsuarioDetalhe = () => {
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        setUsuario(UsuarioService.getAll())
    }, [])

    return (
        <div>
            {usuario.map((item, i) => (
                <DetalheUsuario
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

export default UsuarioDetalhe

