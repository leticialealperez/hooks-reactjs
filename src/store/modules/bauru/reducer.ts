/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { BAURU_STORE } from './constants'

const initialState: IBauru = {
  sabor: 'Barbecue',
  quantidade: 10,
}

// action - type (acao) e payload

const bauruReducer = (
  state: IBauru = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case BAURU_STORE.COMPRAR:
      return {
        sabor: payload.sabor,
        quantidade: state.quantidade - payload.quantidade,
      }

    case BAURU_STORE.REPOR:
      return {
        sabor: payload.sabor,
        quantidade: state.quantidade + payload.quantidade,
      }

    default:
      return state
  }
}

export default bauruReducer
