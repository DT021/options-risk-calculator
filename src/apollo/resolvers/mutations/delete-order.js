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

export default (_root, {id}, {cache}) => {
  const {orders} = cache.readQuery({query: GET_ORDERS})
  cache.writeQuery({
    query: GET_ORDERS,
    data: {
      orders: orders.filter(row => row.id !== id)
    }
  })
};
