import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import CardCidade from '../../components/cardListas/CardCidade'
import CidadeService from '../../services/academico/Cidade';

function CidadeLista() {
    const [cidade, setCidade] = useState([])

    useEffect(() => {
        setCidade(CidadeService.getAll())
    }, [])

    return (
        <div className='fundo'>
    
            <Link className='btn btn-info mb-3' to={'/cidade/create'}><FaPlus /> Novo</Link>

            <Row>
                {cidade.map((item, i) => (
                    <Col className='py-3'>
                        <CardCidade
                            id={i}
                            nome={item.nome}
                            img={item.img}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CidadeLista