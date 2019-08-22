import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))

const Widget = ({xs, md, sm, lg, children, ...rest}) => {
  const classes = useStyles()

  return (
    <Grid xs={xs} md={md} sm={sm} lg={lg} item>
      <Paper className={classes.paper}>
        {children}
      </Paper>
    </Grid>
  )
}

export default Widget
