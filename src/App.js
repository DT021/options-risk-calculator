import React from 'react'
import Dashboard from './layout/Dashboard'
import OptionsPage from './pages/options/Options'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClientProvider from './components/apollo/client-provider'

const App = () => {
  return (
    <ApolloClientProvider>
      {({client}) => (
        <ApolloProvider client={client}>
          <Dashboard>
            <OptionsPage/>
          </Dashboard>
        </ApolloProvider>
      )}
    </ApolloClientProvider>
  )
}

export default App
