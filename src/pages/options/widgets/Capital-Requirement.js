import React from 'react'
import Widget from '../../../components/widgets/Widget'
import WidgetTitle from '../../../components/widgets/Widget-Title'
import { Typography } from '@material-ui/core'

const CapitalRequirements = ({orders, xs, sm, lg, md}) => {
  const capitalRequirements = orders.map(({premium}) => premium).reduce((o1, o2) => o1 + o2, 0)

  return (
    <Widget xs={xs} sm={sm} lg={lg} md={md}>
      <WidgetTitle>Capital Requirement</WidgetTitle>
      <Typography>
        {capitalRequirements || '-'}
      </Typography>
    </Widget>
  )
}


export default CapitalRequirements
