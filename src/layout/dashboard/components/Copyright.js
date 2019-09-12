import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import React from 'react'

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://igu.io/">
      igu.io
    </Link>{' '}
    {new Date().getFullYear()}
    {'. Proudly built with '}
    <Link color="inherit" href="https://material-ui.com/">
      Material-UI.
    </Link>
  </Typography>
)

export default Copyright
