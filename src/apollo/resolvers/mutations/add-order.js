import gql from 'graphql-tag'

const GET_ORDERS = gql`
  query Orders {
    orders @client {
      id
      buyOrSell
      callOrPut
      quantity
      strike
      premium
    }
  }
`

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export default (_root, order, {cache}) => {
  const {orders} = cache.readQuery({query: GET_ORDERS})
  cache.writeQuery({
    query: GET_ORDERS,
    data: {
      orders: [...orders, {__typename: 'Order', id: getRandomArbitrary(1000, 1000000), ...order}]
    }
  })
}
