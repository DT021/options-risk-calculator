import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LayersIcon from '@material-ui/icons/Layers'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon/>
      </ListItemIcon>
      <ListItemText primary="Options"/>
    </ListItem>
  </div>
)
