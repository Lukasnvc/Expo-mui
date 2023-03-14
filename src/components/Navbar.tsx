import { AppBar, Avatar, Badge, Box, Icon, InputBase, Toolbar, Typography, styled } from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";

import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

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
  return (
      <AppBar position="sticky">
        <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs: 'none', sm:'block'}}}>EXPO-site</Typography>
        <EmojiFoodBeverageIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search><InputBase placeholder="search..."/></Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
            </Badge>
            <Badge badgeContent={2} color='error'>
            <Notifications/>
          </Badge>
          <Avatar sx={{width: 30, height: 30}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeq9tnp_--MpET6pc_UoUYOyZGx_lC9ux5WoY6VuXpi3zFFabwHIr6xcRICfwlr_qJmX0&usqp=CAU'/>
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeq9tnp_--MpET6pc_UoUYOyZGx_lC9ux5WoY6VuXpi3zFFabwHIr6xcRICfwlr_qJmX0&usqp=CAU' />
          <Typography >John</Typography>
        </UserBox>
        </StyledToolbar>
      </AppBar>
  )
}

export default Navbar
