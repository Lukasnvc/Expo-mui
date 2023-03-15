import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';

import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ShowContext } from '../contexts/ShowContext';
import { useContext } from 'react';

type Props = {
  pic: string;
  tags: string;
  likes: number;
  author: string;
  avatar: string
}

const Post = ({ pic, tags, likes, author, avatar }: Props) => {
  const lettersAvatar = author.slice(0, 3);
  const { pick } = useContext(ShowContext);

  return (
    <Card>
    <CardHeader
      avatar={
          <Avatar sx={{backgroundImage: `url(${avatar})`, backgroundSize: 'contain'}}>
          {lettersAvatar}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon/>
        </IconButton>
      }
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
          <Typography variant="body2" sx={{ mr: 1 }}>
            {likes}
            </Typography>
            <FavoriteIcon/>
        </Box>
        
      }
      />
      {pick === 'images' ?  <CardMedia
      component="img"
      height="20%"
      image={pic}
      alt="picture"
      /> :
      <CardMedia
      component="iframe"
      height="20%"
          image={pic}
        />
      }
   
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Tags: {tags}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<FavoriteIcon sx={{color: 'red'}}/>}/>
      </IconButton>
      <IconButton aria-label="share">
        <IosShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post