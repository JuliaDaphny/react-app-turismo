import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import TuristicoService from '../../services/academico/Turistico';
import CardTuristico from '../../components/cardListas/CardTuristico';

function TuristicoLista() {
  const [turistico, setTuristico] = useState([])

  useEffect(() => {
    setTuristico(TuristicoService.getAll())
  }, [])

  return (
    <div className='fundo'>

      <Link className='btn mb-5 btn-warning' to={'/turistico/create'}><FaPlus /> Novo</Link>

      <Row>
        {turistico.map((item, i) => (
          <Col className='py-3' key={i}>
            <CardTuristico
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

export default TuristicoLista