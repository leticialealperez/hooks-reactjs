import { FETCH_USERS } from './constants'

const fetchRequested = () => {
  return {
    type: FETCH_USERS.REQUESTED,
  }
}

const fetchSuccess = (users: any[]) => {
  return {
    type: FETCH_USERS.SUCCEDED,
    payload: users,
  }
}

const fetchFailed = (error: string) => {
  return {
    type: FETCH_USERS.FAILED,
    payload: error,
  }
}

export { fetchRequested, fetchSuccess, fetchFailed }
