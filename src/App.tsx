import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeDefault from './config/theme/Default'

import AppRoutes from './routes/AppRoutes'
import StylesGlobal from './config/GlobalStyles'
import { meuStore, meuPersistor } from './store/index'

const App: React.FC = () => {
  return (
    <Provider store={meuStore}>
      <PersistGate persistor={meuPersistor}>
        <ThemeProvider theme={ThemeDefault}>
          <StylesGlobal />
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
