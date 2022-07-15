import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../services/api/api'
import {
  fetchFailed,
  fetchRequested,
  fetchSuccess,
} from '../store/modules/users/actions'

const ExemploPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // aqui troca o valor do loading para true
    dispatch(fetchRequested())

    api
      .get('/users')
      .then(({ data }) => {
        console.log(data)
        dispatch(fetchSuccess(data))
      })
      .catch((error) => {
        dispatch(fetchFailed(error.message))
      })
  }, [])

  const users = useSelector((state: any) => state.userReducer)

  return (
    <React.Fragment>
      <h1>Growdev</h1>
      {users.loading && <div>Loading...</div>}
      {!users.loading && users.error ? <div> Error: {users.error}</div> : null}
      {users.users.length > 0 && (
        <ul>
          {users.users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </React.Fragment>
  )
}

export default ExemploPage
