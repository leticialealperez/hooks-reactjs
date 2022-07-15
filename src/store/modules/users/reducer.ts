import { FETCH_USERS } from './constants'

const initialState = {
  loading: false,
  users: [],
  error: '',
}

const userReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case FETCH_USERS.REQUESTED:
      return {
        ...state,
        loading: true,
      }

    case FETCH_USERS.SUCCEDED:
      return {
        loading: false,
        users: payload,
        error: '',
      }

    case FETCH_USERS.FAILED:
      return {
        loading: false,
        users: [],
        error: payload,
      }

    default:
      return state
  }
}

export default userReducer
