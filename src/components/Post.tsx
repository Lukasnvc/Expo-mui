import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';

import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {
  pic: string;
  tags: string;
  likes: number;
  author: string;
}

const Post = ({ pic, tags, likes, author }: Props) => {
  const lettersAvatar = author.slice(0, 3);
  return (
    <Card>
    <CardHeader
      avatar={
          <Avatar sx={{backgroundImage: `url(${pic})`}}>
          {lettersAvatar}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon/>
        </IconButton>
      }
        title={
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
          <Typography variant="subtitle1" sx={{ mr: 1 }}>
            {likes}
            </Typography>
            <FavoriteIcon/>
        </Typography>
        
      }
    />
    <CardMedia
      component="img"
      height="20%"
      image={pic}
      alt="picture"
    />
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