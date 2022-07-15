import { REFRI_STORE } from './constants'

const initialState = {
  marca: 'Pop-cola',
  quantidade: 10,
}

const refriReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case REFRI_STORE.COMPRAR:
      return {
        ...state,
        quantidade: state.quantidade - payload.quantidade,
      }

    case REFRI_STORE.REPOR:
      return {
        ...state,
        quantidade: state.quantidade + payload.quantidade,
      }

    default:
      return state
  }
}

export default refriReducer
