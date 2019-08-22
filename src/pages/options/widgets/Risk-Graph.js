import React from 'react'

import { Line } from 'react-chartjs-2'
import Widget from '../../../components/widgets/Widget'
import WidgetTitle from '../../../components/widgets/WidgetTitle'

const calculateDataset = (orders, min, max) => ({
  labels: range(min, max),
  datasets: [
    {
      label: 'Risk',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: range(min, max).map(calculateRiskForOrders(orders))
    }
  ]
})

const sum = fn => (accumulator, elem) => accumulator + fn(elem)

const calculateRiskForOrders = orders => price => orders.reduce(sum(calculateRiskForOrder(price)), 0)

const calculateRiskForOrder = price => ({strike, premium, callOrPut, buyOrSell, quantity}) => {
  const breakEven = callOrPut === 'call' ? price - strike : strike - price

  const sign = buyOrSell === 'buy' ? 1 : -1

  return (Math.max(breakEven, 0) - premium) * sign * quantity
}

// P&L = (MAX(breakEven, 0) - premium) * sign * quantity


function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const RiskGraph = ({orders, xs, sm, lg, md}) => (
  <Widget xs={xs} sm={sm} lg={lg} md={md}>
    <WidgetTitle>Risk</WidgetTitle>
    <Line data={calculateDataset(orders, 0, 210)}/>
  </Widget>
)

export default RiskGraph
