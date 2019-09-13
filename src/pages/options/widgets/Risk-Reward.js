import React from 'react'
import Widget from '../../../components/widgets/Widget'
import WidgetTitle from '../../../components/widgets/Widget-Title'
import { Typography } from '@material-ui/core'
import { Orders } from '../../../service'

const RiskReward = ({orders, priceWindow, xs, sm, lg, md}) => {
  const pnl = strikes(priceWindow, orders).map(price => orders.map(Orders.profitAndLossAtPrice(price)).reduce((o1, o2) => o1 + o2, 0))
  const risk = Math.abs(Math.min(...pnl) / Math.max(...pnl))

  return (
    <Widget xs={xs} sm={sm} lg={lg} md={md}>
      <WidgetTitle>Risk/Reward</WidgetTitle>
      <Typography>
        {risk || '-'}
      </Typography>
    </Widget>
  )
}

const strikes = ({minimum, maximum}, orders) => [minimum, ...orders.map(({strike}) => strike), maximum]

export default RiskReward
