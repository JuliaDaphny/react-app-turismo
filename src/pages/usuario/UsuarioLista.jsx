import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import UsuarioService from '../../services/ser/Usuario';
import CardUsuario from '../../components/cardListas/CardUsuario';

function UsuarioLista() {
  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    setUsuario(UsuarioService.getAll())
  }, [])

  return (
    <div className='fundo'>

      <Link className='btn mb-5 btn-danger' to={'/usuario/create'}><FaPlus /> Novo</Link>

      <Row>
        {usuario.map((item, i) => (
          <Col className='py-3' key={i}>
            <CardUsuario
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

export default UsuarioLista