import React from 'react'
import Widget from '../../../components/widgets/Widget'
import WidgetTitle from '../../../components/widgets/Widget-Title'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Orders from '../../../service/orders'

const BreakEvenPoints = ({orders, xs, sm, lg, md}) => {
  return (
    <Widget xs={xs} sm={sm} lg={lg} md={md}>
      <WidgetTitle>Break Even Points</WidgetTitle>
      <Table size="small">
        <TableBody>
          {
            Orders.breakEvens(orders)
              .filter(isFinite)
              .map(result => <TableRow><TableCell>{result}</TableCell></TableRow>)
          }
        </TableBody>
      </Table>
    </Widget>
  )
}

export default BreakEvenPoints
