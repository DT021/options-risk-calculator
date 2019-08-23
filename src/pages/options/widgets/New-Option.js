import React from 'react'
import { TextField } from 'formik-material-ui'
import WidgetTitle from '../../../components/widgets/Widget-Title'
import Widget from '../../../components/widgets/Widget'
import Button from '@material-ui/core/Button'
import { Field, Form, Formik } from 'formik'
import MenuItem from '@material-ui/core/MenuItem'

import * as Yup from 'yup'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const schema = Yup.object().shape({
  quantity: Yup.number().required('strike is required'),
  callOrPut: Yup.string().required('quantity is required'),
  strike: Yup.number().required('callOrPut is required'),
  premium: Yup.number().required('premium is required')
})


const NewOrder = ({xs, sm, onNewOrder}) => (
  <Widget xs={xs} sm={sm}>
    <WidgetTitle>New Order</WidgetTitle>
    <Formik
      validationSchema={schema}
      initialValues={{
        strike: '',
        quantity: 1,
        callOrPut: 'call',
        premium: ''
      }}
      onSubmit={(values, {setSubmitting}) => {
        try {
          onNewOrder(values)
        } finally {
          setSubmitting(false)
        }
      }}>
      {({isSubmitting, handleSubmit, setFieldValue, isValid}) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field required fullWidth type='number' name="quantity" label="Quantity" component={TextField}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field required fullWidth type="text" name="callOrPut" label="Call/Put" select component={TextField}>
                <MenuItem value="call">Call</MenuItem>
                <MenuItem value="put">Put</MenuItem>
              </Field>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field required fullWidth type='number' name="strike" label="Strike" component={TextField}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field required fullWidth type='number' name="premium" label="Premium" component={TextField}/>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color='primary'
                  disabled={isSubmitting || !isValid}
                  onClick={e => {
                    setFieldValue('buyOrSell', 'buy', false)
                    handleSubmit(e)
                  }}>
                  Buy
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  disabled={isSubmitting || !isValid}
                  onClick={e => {
                    setFieldValue('buyOrSell', 'sell', false)
                    handleSubmit(e)
                  }}>
                  Sell
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  </Widget>

)

export default NewOrder
