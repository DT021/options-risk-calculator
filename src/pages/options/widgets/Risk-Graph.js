import React from 'react'

import { Scatter } from 'react-chartjs-2'
import Widget from '../../../components/widgets/Widget'
import WidgetTitle from '../../../components/widgets/Widget-Title'
import { Orders } from '../../../service'

const calculateDataset = (orders, minimum, maximum) => {
  if (orders && orders.length) {
    const gradientChangeAtStrike = Orders.gradientChangeAtStrike(orders)
    const gradientChanges = [
      gradientChangeAtStrike({strike: minimum}),
      ...Orders.gradientChanges(orders),
      gradientChangeAtStrike({strike: maximum})
    ].sort(({x: o1}, {x: o2}) => o1 > o2 ? 1 : -1)

    return {
      datasets: [{
        fill: false,
        label: 'Scatter Dataset',
        showLine: true,
        lineTension: 0,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        data: gradientChanges
      }]
    }
  }

  return {}


}

const RiskGraph = ({orders, priceWindow: {minimum, maximum}, xs, sm, lg, md}) => (
  <Widget xs={xs} sm={sm} lg={lg} md={md}>
    <WidgetTitle>Risk</WidgetTitle>
    <Scatter data={calculateDataset(orders, minimum, maximum)} options={{
      scales: {
        xAxes: [{
          ticks: {
            min: minimum,
            max: maximum
          }
        }]
      }
    }}/>
  </Widget>
)

export default RiskGraph
