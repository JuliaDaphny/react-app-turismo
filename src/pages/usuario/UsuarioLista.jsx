import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import UsuarioService from '../../services/Usuario';
import CardUsuario from '../../components/cardListas/CardUsuario';

function UsuarioLista() {
  const [usuarioList, setUsuario] = useState([])

  useEffect(() => {
    setUsuario(UsuarioService.getAll())
  }, [])

  return (

    <div className='fundo'>
      <Container>
        <Row>
          <Col className='py-4'>
            <Link className='btn btn-warning ' to={'/usuario/create'}><FaPlus /> Novo</Link>
          </Col>
        </Row>
        <Row>
          {usuarioList.map((turistico, i) => (
            <Col className="py-3" key={i}>
              <CardUsuario
                id={i}
                nome={turistico.nome}
                funcao={turistico.funcao}
                dataDeCadastro={turistico.dataDeCadastro} //mask
                email={turistico.email} //mask
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default UsuarioLista