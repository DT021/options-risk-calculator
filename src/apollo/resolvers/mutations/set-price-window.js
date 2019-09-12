import gql from 'graphql-tag'

const GET_PRICE_WINDOW = gql`
  query PriceWindow {
    priceWindow @client {
      minimum
      maximum
    }
  }
`

export default (_root, {minimum, maximum}, {cache}) => {
  const {priceWindow} = cache.readQuery({query: GET_PRICE_WINDOW})

  cache.writeQuery({
    query: GET_PRICE_WINDOW,
    data: {
      priceWindow: {...priceWindow, minimum, maximum}
    }
  })
};
