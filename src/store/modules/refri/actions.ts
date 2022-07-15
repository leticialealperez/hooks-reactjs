import { REFRI_STORE } from './constants'

const comprarRefri = (payload: any) => {
  return {
    type: REFRI_STORE.COMPRAR,
    payload,
  }
}

const reporRefri = (payload: any) => {
  return {
    type: REFRI_STORE.REPOR,
    payload,
  }
}

export { comprarRefri, reporRefri }
