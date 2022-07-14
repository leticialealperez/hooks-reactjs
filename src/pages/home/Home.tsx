import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { comprarBauru, reporBauru } from '../../store/modules/bauru/actions'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [inputCompra, setInputCompra] = useState<string>('')
  const [inputRepor, setInputRepor] = useState<string>('')

  // trazer infos armazenadas no estado global (STORE) - useSelector
  const bauru: IBauru = useSelector((state: any) => state.bauruReducer)

  const handleComprar = () => {
    console.log('Comprando bauru...')

    // cria o objeto com os dados que serão enviados para atualizar a store
    // pode ser montada diretamente na chamada da action. Ex: comprarBauru({ sabor: '', quantidade: '' })
    const payload: IBauru = {
      sabor: 'Barbecue',
      quantidade: +inputCompra,
    }

    // dispara a action mandando os dados para modificação da store
    dispatch(comprarBauru(payload))
  }

  const handleRepor = () => {
    console.log('Repondo estoque de bauru...')

    // cria o objeto com os dados que serão enviados para atualizar a store
    const payload: IBauru = {
      sabor: 'Barbecue',
      quantidade: +inputRepor,
    }

    // dispara a action mandando os dados para modificação da store
    dispatch(reporBauru(payload))
  }

  return (
    <div>
      <h1>Sabor: {bauru.sabor}</h1>
      <h4>Estoque: {bauru.quantidade}</h4>
      <div>
        <button type="button" onClick={() => handleComprar()}>
          Comprar
        </button>
        <input
          type="number"
          value={inputCompra}
          placeholder="Informe quantidade"
          onChange={(e) => setInputCompra(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={() => handleRepor()}>
          Repor Estoque
        </button>
        <input
          type="number"
          value={inputRepor}
          onChange={(e) => setInputRepor(e.target.value)}
          placeholder="Informe a quantidade"
        />
      </div>
    </div>
  )
}

export default Home
