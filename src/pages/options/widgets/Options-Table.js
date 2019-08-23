import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import WidgetTitle from '../../../components/widgets/Widget-Title'
import Widget from '../../../components/widgets/Widget'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { Orders } from '../../../service'

const maxProfit = ({strike, premium, callOrPut, buyOrSell}) => {
  if (callOrPut === 'call' && buyOrSell === 'buy') {
    return Number.POSITIVE_INFINITY
  } else if (callOrPut === 'put' && buyOrSell === 'buy') {
    return strike - premium
  } else if (callOrPut === 'call' && buyOrSell === 'sell') {
    return premium
  } else if (callOrPut === 'put' && buyOrSell === 'sell') {
    return premium
  }
}

const maxLoss = ({strike, premium, callOrPut, buyOrSell}) => {
  if (callOrPut === 'call' && buyOrSell === 'buy') {
    return premium
  } else if (callOrPut === 'put' && buyOrSell === 'buy') {
    return premium
  } else if (callOrPut === 'call' && buyOrSell === 'sell') {
    return Number.NEGATIVE_INFINITY
  } else if (callOrPut === 'put' && buyOrSell === 'sell') {
    return strike - premium
  }
}

const OrdersTableWidget = ({orders, xs, onDelete}) => (
  <Widget xs={xs}>
    <WidgetTitle>Orders</WidgetTitle>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Buy/Sell</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Call/Put/Stock</TableCell>
          <TableCell>Strike ($)</TableCell>
          <TableCell>Premium</TableCell>
          <TableCell>Break Even</TableCell>
          <TableCell>Max Profit</TableCell>
          <TableCell>Max Loss</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map(row => (
          <TableRow key={row.id}>
            <TableCell>
              <IconButton aria-label="delete" onClick={() => onDelete(row)}>
                <DeleteIcon/>
              </IconButton>
            </TableCell>
            <TableCell>{row.buyOrSell}</TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell>{row.callOrPut}</TableCell>
            <TableCell>{row.strike}</TableCell>
            <TableCell>{row.premium}</TableCell>
            <TableCell>{Orders.breakEven(row)}</TableCell>
            <TableCell>{maxProfit(row)}</TableCell>
            <TableCell>{maxLoss(row)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Widget>
)

export default OrdersTableWidget
