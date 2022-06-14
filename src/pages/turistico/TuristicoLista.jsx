import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import TuristicoService from '../../services/ser/Turistico';
import CardTuristico from '../../components/cardListas/CardTuristico';

function TuristicoLista() {
  const [turisticoList, setTuristico] = useState([])

  useEffect(() => {
    setTuristico(TuristicoService.getAll())
  }, [])

  return (
    <div className='fundo'>
      <Container>
        <Row>
          <Col className='py-4'>
            <Link className='btn btn-warning ' to={'/turistico/create'}><FaPlus /> Novo</Link>
          </Col>
        </Row>
        <Row>
          {turisticoList.map((turistico, i) => (
            <Col className="py-3" key={i}>
              <CardTuristico
                id={i}
                nome={turistico.nome}
                img={turistico.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default TuristicoLista