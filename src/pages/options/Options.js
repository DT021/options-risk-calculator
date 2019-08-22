import Grid from '@material-ui/core/Grid'
import RiskGraph from './widgets/Risk-Graph'
import Orders from '../../pages/options/widgets/Options-Table'
import Container from '@material-ui/core/Container'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import NewOrder from './widgets/New-Option'
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'


const GET_OPTIONS = gql`
  query Options {
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

  if (loading) return null
  if (error) return `Error! ${error}`

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <RiskGraph xs={12} orders={data.orders}/>
        <Orders xs={12} onDelete={({id}) => deleteOrder({variables: {id}})} orders={data.orders}/>
        <NewOrder xs={12} sm={6} onNewOrder={variables => addOptionOrder({variables})}/>
      </Grid>
    </Container>
  )
}

export default OptionsPage
