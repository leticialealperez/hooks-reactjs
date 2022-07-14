import { BAURU_STORE } from './constants'

// vai ser a ação que vai ser invocada na nossa aplicação
export const comprarBauru = (payload: IBauru) => {
  return {
    type: BAURU_STORE.COMPRAR,
    payload,
  }
}

export const reporBauru = (payload: IBauru) => {
  return {
    type: BAURU_STORE.REPOR,
    payload,
  }
}
