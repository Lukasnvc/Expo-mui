import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { HOME_PATH, IMAGES_PAGE_PATH, VIDEOS_PAGE_PATH } from "../routes/const";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { ShowContext } from "../contexts/ShowContext";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { setPick, setColor, color, handleLogOut } = useContext(ShowContext);
  const navigate = useNavigate();

  const handleNavigateImages = () => {
    setPick("images");
    navigate(IMAGES_PAGE_PATH);
  };

  const handleNavigateVideos = () => {
    setPick("videos");
    navigate(VIDEOS_PAGE_PATH);
  };

  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate(HOME_PATH)}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleNavigateImages}>
              <ListItemIcon>
                <BurstModeIcon />
              </ListItemIcon>
              <ListItemText primary="Images" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleNavigateVideos}>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Videos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Liked" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleLogOut()}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{color === "dark" ? <LightModeIcon /> : <DarkModeIcon />}</ListItemIcon>
              <Switch onChange={(e) => setColor(color === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
