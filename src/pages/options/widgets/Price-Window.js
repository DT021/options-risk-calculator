import React from 'react'
import { TextField } from 'formik-material-ui'
import Widget from '../../../components/widgets/Widget'
import { Field, Form, Formik } from 'formik'

import * as Yup from 'yup'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const schema = Yup.object().shape({
  minimum: Yup.number().required('minimum is required'),
  maximum: Yup.number().required('maximum is required'),
})


const PriceWindow = ({xs, sm, priceWindow: {minimum, maximum}, onNewPriceWindow}) => (
  <Widget xs={xs} sm={sm}>
    <Formik
      validationSchema={schema}
      initialValues={{
        minimum: minimum,
        maximum: maximum,
      }}
      onSubmit={(values, {setSubmitting}) => {
        try {
          onNewPriceWindow(values)
        } finally {
          setSubmitting(false)
        }
      }}>
      {({isSubmitting, isValid}) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field required fullWidth type='number' name="minimum" label="Minimum" component={TextField}/>
            </Grid>
            <Grid item xs={6}>
              <Field required fullWidth type='number' name="maximum" label="Maximum" component={TextField}/>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <Button
                  type='submit'
                  fullWidth
                  variant="contained"
                  color='primary'
                  disabled={isSubmitting || !isValid}>
                  Commit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  </Widget>

)

export default PriceWindow
