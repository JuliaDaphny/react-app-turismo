import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import EntretenimentoService from '../../services/academico/Entretenimento';
import CardEntretenimento from '../../components/cardListas/CardEntretenimento';

function EntretenimentoLista() {
  const [entretenimento, setEntretenimento] = useState([])

  useEffect(() => {
    setEntretenimento(EntretenimentoService.getAll())
  }, [])

  return (
    <div className='fundo'>

      <Link className='btn mb-5 btn-warning' to={'/entretenimento/create'}><FaPlus /> Novo</Link>

      <Row>
        {entretenimento.map((item, i) => (
          <Col className='py-3' key={i}>
            <CardEntretenimento
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

export default EntretenimentoLista