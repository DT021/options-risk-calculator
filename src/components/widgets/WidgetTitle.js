import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const WidgetTitle = ({children}) => (
  <Typography component="h2" variant="h6" color="primary" gutterBottom>
    {children}
  </Typography>
)

WidgetTitle.propTypes = {
  children: PropTypes.node,
}


export default WidgetTitle

