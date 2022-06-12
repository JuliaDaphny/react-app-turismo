import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import ComercioService from '../../services/academico/Comercio';
import CardComercio from '../../components/cardListas/CardComercio';

function ComercioLista() {
  const [comercio, setComercio] = useState([])

  useEffect(() => {
    setComercio(ComercioService.getAll())
  }, [])

  return (
    <div className='fundo'>

      <Link className='btn mb-5 btn-warning' to={'/comercio/create'}><FaPlus /> Novo</Link>

      <Row>
        {comercio.map((item, i) => (
          <Col className='py-3' key={i}>
            <CardComercio
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

export default ComercioLista