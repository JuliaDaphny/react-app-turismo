import React from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import "../../components/css/Projeto.css"
import Tóquio from "../../imagens/Tóquio.png"
import Veneza from "../../imagens/Veneza.png"
import Istanbul from "../../imagens/Istanbul.png"

import { BsFillEyeFill, BsCheckCircle } from 'react-icons/bs'

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} >
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://th.bing.com/th/id/R.711d03bdc95525ce29efb679b6286179?rik=bqT9X9YJueAbbQ&riu=http%3a%2f%2fviva-mundo.com%2fsites%2fdefault%2ffiles%2fimages%2fposts%2ftoronto1.jpg&ehk=x7Wf%2fidQ6G%2bXLZbxSX06CYiSgMQ3xll9CI4RViMrimo%3d&risl=&pid=ImgRaw&r=0"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Planeta Tour</h3>
                  <p>Visualize os roteiros dos outros usuarios disponiveis no site ou crie o seu</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://costabrancanews.com/wp-content/uploads/2018/09/Passos-MG-1.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Crie seu roteiro de viagens</h3>
                  <p>Selecione as cidades que você vai viajr e crie seu rotei para facilciar na rota da diversão!</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://wallpapercave.com/wp/wp6392442.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Planeta Tour</h3>
                  <p>
                    Selecione os cards que tem interesse em colocar em sua rota e crie o roteiro de sua viagem.
                    Caso prefira selecione os cards já disponiveis pelos usuarios!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container fluid className="img-fundo py-3">
              <Row className='px-0'>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={Tóquio} />
                    <Card.Body>
                      <Card.Title>Tóquio</Card.Title>
                      <Card.Text>
                        Tóquio, capital do Japão, é conhecida por ser a metrópole mais populosa do mundo.
                        Repleta de bairros turísticos, templos e parques, atrai milhares de turistas o ano todo! Confira mais... Conheça seus principais pontos turísticos.
                      </Card.Text>
                      <Button className='btn btn-dark m-1'><BsCheckCircle /></Button>
                      <Button className='btn btn-dark'><BsFillEyeFill /></Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={Veneza} />
                    <Card.Body>
                      <Card.Title>Veneza</Card.Title>
                      <Card.Text>
                      Cidade dos apaixonados das dezenas de canais, perfeita 
                      para quem gosta de aliar belezas históricas e naturais é um lugar com muitas coisas para fazer por isso, o ideal é seguir um 
                      roteiro em que você possa aproveitar bem o seu  tempo!!!
                      </Card.Text>
                      <Button className='btn btn-dark m-1'><BsCheckCircle /></Button>
                      <Button className='btn btn-dark'><BsFillEyeFill /></Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={Istanbul} />
                    <Card.Body>
                      <Card.Title>Istanbul</Card.Title>
                      <Card.Text>
                      Uma cidade, dois continentes. Istambul é um daqueles lugares nos quais a gente vai para ver de perto a história. Situada na passagem entre dois mundos,
                      foi cenário de muitas disputas políticas, de mescla cultural e desenvolvimento comercial.
                      </Card.Text>
                      <Button className='btn btn-dark m-1'><BsCheckCircle /></Button>
                      <Button className='btn btn-dark'><BsFillEyeFill /></Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Home