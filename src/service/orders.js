const breakEven = ({strike, premium, callOrPut}) => callOrPut === 'call' ? premium + strike : strike - premium

const breakEvens = (orders) => {
  const pnls = gradientChanges(orders)

  const combine = pnls.sliding(1)

  return combine.map(([a, b]) => xIntercept(a, b))
}

const gradientChanges = orders => orders.map(gradientChangeAtStrike(orders))

const gradientChangeAtStrike = orders => ({strike}) => ({
  x: strike,
  y: orders.map(profitAndLossAtPrice(strike)).reduce(sum)
})

const sum = (o1, o2) => o1 + o2

const xIntercept = (a, b) => a.x - a.y * (b.x - a.x) / (b.y - a.y)

const profitAndLossAtPrice = price => ({strike, premium, callOrPut, buyOrSell, quantity}) => {
  const breakEven = callOrPut === 'call' ? price - strike : strike - price

  const sign = buyOrSell === 'buy' ? 1 : -1

  return (Math.max(breakEven, 0) - premium) * sign * quantity
}


export default {
  breakEven,
  breakEvens,
  gradientChanges,
  gradientChangeAtStrike,
  profitAndLossAtPrice
}
