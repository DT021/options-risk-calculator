export default {
  priceWindow: {
    __typename: 'PriceWindow',
    minimum: 100,
    maximum: 200
  },
  orders: [
    {
      __typename: 'Order',
      id: 1,
      buyOrSell: 'buy',
      callOrPut: 'put',
      quantity: 1,
      strike: 160,
      premium: 1.07
    },
    {
      __typename: 'Order',
      id: 2,
      buyOrSell: 'sell',
      callOrPut: 'put',
      quantity: 1,
      strike: 170,
      premium: 4.97
    },
    {
      __typename: 'Order',
      id: 3,
      buyOrSell: 'sell',
      callOrPut: 'call',
      quantity: 1,
      strike: 180,
      premium: 5.68
    },
    {
      __typename: 'Order',
      id: 4,
      buyOrSell: 'buy',
      callOrPut: 'call',
      quantity: 1,
      strike: 190,
      premium: 2.49
    }
  ]
}
