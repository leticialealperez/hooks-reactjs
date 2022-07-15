/* eslint-disable import/order */
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import persisted from './persistorReducer'
import rootReducer from './modules/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const meuStore = createStore(
  persisted(rootReducer),
  composeWithDevTools(applyMiddleware(thunk))
)

const meuPersistor = persistStore(meuStore)

export { meuStore, meuPersistor }
