import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// root reducer contem todos os nossos reducers

export default (reducers: any) => {
  const persisted = persistReducer(
    {
      key: 'bauru_store',
      storage,
      whitelist: ['bauruReducer', 'refriReducer', 'userReducer'],
    },
    reducers
  )

  return persisted
}
