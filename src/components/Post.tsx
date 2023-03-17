import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";

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
  const [liked, setLiked] = useState(false);
  const lettersAvatar = author.slice(0, 3);
  const { pick } = useContext(ShowContext);

  let likedItems = JSON.parse(localStorage.getItem("likedItems") as string) || [];
  useEffect(() => {
    setLiked(likedItems.includes(id) ? true : false);
  }, [liked]);

  const addToLiked = (id: number) => {
    if (likedItems.includes(id)) {
      // If the item is already in the array, remove it
      likedItems = likedItems.filter((item: number) => item !== id);
      setLiked(false);
    } else {
      // Otherwise, add it to the array
      likedItems.push(id);
      setLiked(true);
    }

    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  };

  return (
    <Card>
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
        <CardMedia component="img" height="20%" image={pic} alt="picture" />
      ) : (
        <CardMedia component="iframe" height="20%" image={pic} />
      )}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Tags: {tags}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => addToLiked(id)}>
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
