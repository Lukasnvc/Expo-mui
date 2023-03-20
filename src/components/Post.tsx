import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { generatePath, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { CARD_PATH } from "../routes/const";
import { FavoriteBorder } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ShowContext } from "../contexts/ShowContext";

type Props = {
  pic: string;
  tags: string;
  likes: number;
  author: string;
  avatar: string;
  id: number;
};

const Post = ({ pic, tags, likes, author, avatar, id }: Props) => {
  const navigate = useNavigate();
  const { pick } = useContext(ShowContext);

  const [liked, setLiked] = useState<boolean>(() => {
    const userObjectString = localStorage.getItem("user");
    if (!userObjectString) {
      throw new Error("User object not found in local storage.");
    }
    const userObject = JSON.parse(userObjectString);
    const likesArray = userObject[pick + "_likes"] || [];
    return likesArray.includes(id);
  });

  const lettersAvatar = author.slice(0, 3);

  function toggleLikeInUserObject(id: number) {
    const userObjectString = localStorage.getItem("user");
    if (!userObjectString) {
      throw new Error("User object not found in local storage.");
    }
    const userObject = JSON.parse(userObjectString);
    console.log("userObject:", userObject);
    let likesArray = userObject[pick + "_likes"];
    console.log("likesArray before toggle:", pick, id, likesArray);
    if (typeof likesArray === "string") {
      try {
        likesArray = JSON.parse(likesArray);
      } catch (e) {
        likesArray = [];
      }
    }

    if (!Array.isArray(likesArray)) {
      likesArray = [];
    }
    if (likesArray.includes("d")) {
      likesArray = likesArray.filter((item: string) => item !== "d");
    }
    likesArray = likesArray.filter((item: any) => typeof item !== "string");
    const index = likesArray.indexOf(id);
    if (index !== -1) {
      likesArray.splice(index, 1);
    } else {
      likesArray.push(id);
    }
    userObject[pick + "_likes"] = likesArray;
    console.log("likesArray after toggle:", likesArray);
    localStorage.setItem("user", JSON.stringify(userObject));
    setLiked(!liked);
  }

  const navigatePin = (id: any) => {
    const path = generatePath(CARD_PATH, { id });
    navigate(path);
  };
  return (
    <Card elevation={10}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundImage: `url(${avatar})`, backgroundSize: "contain" }}>
            {lettersAvatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              {likes}
            </Typography>
            <FavoriteIcon />
          </Box>
        }
      />
      {pick === "images" ? (
        <CardMedia
          onClick={() => navigatePin(id)}
          component="img"
          height="20%"
          image={pic}
          alt="picture"
        />
      ) : (
        <CardMedia component="iframe" height="20%" image={pic} />
      )}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Tags: {tags}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => toggleLikeInUserObject(id)}>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
            checked={liked}
          />
        </IconButton>
        <IconButton aria-label="share">
          <IosShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
