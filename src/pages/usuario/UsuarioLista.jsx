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
          {usuarioList.map((usuario, i) => (
            <Col className="py-3" key={i}>
              <CardUsuario
                id={i}
                nome={usuario.nome}
                funcao={usuario.funcao}
                dataDeCadastro={usuario.dataDeCadastro} //mask
                email={usuario.email}
                senha={usuario.senha}
                telefone={usuario.telefone} //mask
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default UsuarioLista