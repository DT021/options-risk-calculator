import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'

const MenuItem = ({label, icon}) => (
  <ListItem button>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={label}/>
  </ListItem>
)

export default MenuItem
