import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import CardCidade from '../../components/cardListas/CardCidade'
import CidadeService from '../../services/ser/Cidade';

function CidadeLista() {
    const [cidadeList, setCidade] = useState([])

    useEffect(() => {
        setCidade(CidadeService.getAll())
    }, [])

    return (
        <div className='fundo'>
            <Container>
                <Row>
                    <Col className='py-4'>
                        <Link className='btn btn-warning ' to={'/cidade/create'}><FaPlus /> Novo</Link>
                    </Col>
                </Row>
                <Row>
                    {cidadeList.map((cidade, i) => (
                        <Col md={4} className="py-3" key={i}>
                            <CardCidade
                                id={i}
                                nome={cidade.nome}
                                img={cidade.img}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default CidadeLista