import Grid from '@material-ui/core/Grid'
import RiskGraph from './widgets/Risk-Graph'
import Orders from '../../pages/options/widgets/Options-Table'
import Container from '@material-ui/core/Container'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import NewOrder from './widgets/New-Option'
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'
import MaxProfit from './widgets/Max-Profit'
import MaxLoss from './widgets/Max-Loss'
import RiskReward from './widgets/Risk-Reward'
import PriceWindow from './widgets/Price-Window'
import BreakEvenPoints from './widgets/Break-Even-Points'
import CapitalRequirements from './widgets/Capital-Requirement'


const GET_OPTIONS = gql`
  query Options {
    priceWindow @client {
      minimum
      maximum
    }
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

const ADD_OPTION_ORDER = gql`
  mutation AddOrder($buyOrSell: String, $callOrPut: String, $premium: Int, $quantity: Int, $strike: Int) {
    addOrder(buyOrSell: $buyOrSell, callOrPut: $callOrPut, premium: $premium, quantity: $quantity, strike: $strike) @client
  }
`

const DELETE_ORDER = gql`
  mutation DeleteOrder($id: Int) {
    deleteOrder(id: $id) @client
  }
`

const SET_PRICE_WINDOW = gql`
  mutation SetPriceWindow($minimum: Int, $maximum: Int) {
    setPriceWindow(minimum: $minimum, maximum: $maximum) @client
  }
`

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))


const OptionsPage = () => {
  const classes = useStyles()
  const {loading, error, data} = useQuery(GET_OPTIONS)
  const [addOptionOrder] = useMutation(ADD_OPTION_ORDER)
  const [deleteOrder] = useMutation(DELETE_ORDER)
  const [setPriceWindow] = useMutation(SET_PRICE_WINDOW)

  if (loading) return null
  if (error) return `Error! ${error}`

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <MaxProfit xs={3} priceWindow={data.priceWindow} orders={data.orders}/>
        <MaxLoss xs={3} priceWindow={data.priceWindow} orders={data.orders}/>
        <RiskReward xs={3} priceWindow={data.priceWindow} orders={data.orders}/>
        <CapitalRequirements xs={3} orders={data.orders} />
        <RiskGraph xs={12} priceWindow={data.priceWindow} orders={data.orders}/>
        <PriceWindow xs={4} priceWindow={data.priceWindow}
                     onNewPriceWindow={({minimum, maximum}) => setPriceWindow({variables: {minimum, maximum}})}/>
        <NewOrder xs={12} sm={4} onNewOrder={variables => addOptionOrder({variables})}/>
        <BreakEvenPoints priceWindow={data.priceWindow} xs={4} orders={data.orders}/>
        <Orders xs={12} onDelete={({id}) => deleteOrder({variables: {id}})} orders={data.orders}/>
      </Grid>
    </Container>
  )
}

export default OptionsPage
