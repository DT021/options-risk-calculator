import React from 'react'
import Widget from '../../../components/widgets/Widget'
import WidgetTitle from '../../../components/widgets/Widget-Title'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Orders from '../../../service/orders'
import { Graphs } from '../../../service'

const BreakEvenPoints = ({orders, priceWindow, xs, sm, lg, md}) => {

  const pnls = strikes(priceWindow, orders)
    .map(price => ({y: orders.map(Orders.profitAndLossAtPrice(price)).reduce((o1, o2) => o1 + o2, 0), x: price}))
    .sliding(1)
    .filter(([a, b]) => Math.sign(a.y) !== Math.sign(b.y))
    .map(([a, b]) => Graphs.xIntercept(a, b))
    .filter(isFinite)

  return (
    <Widget xs={xs} sm={sm} lg={lg} md={md}>
      <WidgetTitle>Break Even Points</WidgetTitle>
      <Table size="small">
        <TableBody>
          {
            pnls.map((result, idx) => <TableRow key={idx}><TableCell>{result}</TableCell></TableRow>)
          }
        </TableBody>
      </Table>
    </Widget>
  )
}

const strikes = ({minimum, maximum}, orders) => [minimum, ...orders.map(({strike}) => strike), maximum]


export default BreakEvenPoints
