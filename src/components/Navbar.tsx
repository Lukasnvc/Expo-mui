import { AppBar, Avatar, Badge, Box, Icon, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";

import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
      <AppBar position="sticky">
        <StyledToolbar>
        <Typography variant="h5" sx={{display: {xs: 'none', sm:'block'}}}>EXPO-site</Typography>
        <EmojiFoodBeverageIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search><InputBase placeholder="search..."/></Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
            </Badge>
            <Badge badgeContent={2} color='error'>
            <Notifications/>
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeq9tnp_--MpET6pc_UoUYOyZGx_lC9ux5WoY6VuXpi3zFFabwHIr6xcRICfwlr_qJmX0&usqp=CAU'
          onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeq9tnp_--MpET6pc_UoUYOyZGx_lC9ux5WoY6VuXpi3zFFabwHIr6xcRICfwlr_qJmX0&usqp=CAU'
          onClick={e=>setOpen(true)}
          />
          <Typography variant="body1">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Navbar
