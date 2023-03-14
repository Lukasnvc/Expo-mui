import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{display: {xs: 'none', sm: 'block'}}}
    >
      <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
              <MenuBookIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
              <Diversity3Icon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
              <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
              <PeopleOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
              <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
              <DarkModeIcon/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>
        </List>

    </Box>
  )
}

export default Sidebar