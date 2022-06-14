import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import EntretenimentoService from '../../services/Entretenimento';
import CardEntretenimento from '../../components/cardListas/CardEntretenimento';

function EntretenimentoLista() {
  const [entretenimentoList, setEntretenimento] = useState([])

  useEffect(() => {
    setEntretenimento(EntretenimentoService.getAll())
  }, [])

  return (
    <div className='fundo'>
      <Container>
        <Row>
          <Col className='py-4'>
            <Link className='btn btn-warning ' to={'/entretenimento/create'}><FaPlus /> Novo</Link>
          </Col>
        </Row>
        <Row>
          {entretenimentoList.map((entretenimento, i) => (
            <Col className="py-3" key={i}>
              <CardEntretenimento
                id={i}
                nome={entretenimento.nome}
                img={entretenimento.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default EntretenimentoLista