import React from 'react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import resolvers from '../../apollo/resolvers'
import defaults from '../../apollo/defaults'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'

class ApolloClientProvider extends React.Component{
  state = {
    client: null,
    loaded: false,
  }

  async componentDidMount() {

    // Setup your Apollo Link, and any other Apollo packages here.
    const cache = new InMemoryCache()

    const client = new ApolloClient({
      cache,
      resolvers
    })

    cache.writeData({
      data: defaults,
    })


    try {
      await persistCache({
        cache,
        storage: window.localStorage,
      })
    } catch (error) {
      console.error('Error restoring Apollo cache', error)
    }

    this.setState({
      client,
      loaded: true,
    })
  }

  render() {
    const {client, loaded} = this.state
    const {children} = this.props

    if (!loaded) {
      return <div>Loading...</div>
    }

    return (
      <ApolloProvider client={client}>
        {children({client})}
      </ApolloProvider>
    )
  }
}

export default ApolloClientProvider
