import React from 'react'
import { Link } from 'react-router-dom'
import "../../components/css/Projeto.css"

const Home = () => {
  return (
    <div>
      <div>
        <h1>Home</h1>
        <Link to={'/cidade'}>Acessar a area de adm </Link>
      </div>
    </div>
  )
}

export default Home