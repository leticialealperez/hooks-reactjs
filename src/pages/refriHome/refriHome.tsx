import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../services/api/api'
import { comprarRefri } from '../../store/modules/refri/actions'

const refriHome: React.FC = () => {
  const [dados, setDados] = useState([])

  useEffect(() => {
    api
      .get('/')
      .then((resposta) => {
        setDados(resposta.data.json())
      })
      .catch((error) => error.message)
  }, [])

  useEffect(() => {
    console.log(dados)
  }, [])

  return (
    <React.Fragment>
      <h1>Growdev</h1>
      {dados && <p>{dados[0]}</p>}
    </React.Fragment>
  )
}

export default refriHome
