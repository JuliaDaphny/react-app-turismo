import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import ComercioService from '../../services/ser/Comercio';
import CardComercio from '../../components/cardListas/CardComercio';

function ComercioLista() {
  const [comercioList, setComercio] = useState([])

  useEffect(() => {
    setComercio(ComercioService.getAll())
  }, [])

  return (
    <div className='fundo'>
      <Container>
        <Row>
          <Col className='py-4'>
            <Link className='btn btn-warning ' to={'/comercio/create'}><FaPlus /> Novo</Link>
          </Col>
        </Row>
        <Row>
          {comercioList.map((comercio, i) => (
            <Col md={4} className="py-3" key={i}>
              <CardComercio
                id={i}
                nome={comercio.nome}
                img={comercio.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ComercioLista