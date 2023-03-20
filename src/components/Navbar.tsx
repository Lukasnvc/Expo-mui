import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Icon,
  Input,
  InputBase,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";

import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Notifications } from "@mui/icons-material";
import { SearchContext } from "../contexts/SearchContext";
import { ShowContext } from "../contexts/ShowContext";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const { text, setText, data, setData } = useContext(SearchContext);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const { handleLogOut } = useContext(ShowContext);
  const userObjectString = localStorage.getItem("user");
  if (!userObjectString) {
    throw new Error("User object not found in local storage.");
  }
  const userObject = JSON.parse(userObjectString);
  const likesArray = userObject.likes || [];
  const lettersAvatar = userObject.first_name.slice(0, 3);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          EXPO-site
        </Typography>
        <EmojiFoodBeverageIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <TextField placeholder="Search..." onChange={(e) => setText(e.target.value)} />
        </Search>
        <Icons>
          <Badge badgeContent={likesArray.length} color="error">
            <FavoriteIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={(e) => setOpen(true)}>
            {lettersAvatar}
          </Avatar>
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeq9tnp_--MpET6pc_UoUYOyZGx_lC9ux5WoY6VuXpi3zFFabwHIr6xcRICfwlr_qJmX0&usqp=CAU"
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="body1">{userObject.first_name}</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={() => handleLogOut()}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
