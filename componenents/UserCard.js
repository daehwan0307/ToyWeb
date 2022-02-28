import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';




const RecipeReviewCard=({userID,location,writeTime})=> {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src='/hihi.jpg'></img>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
            <MoreVertIcon />
          </IconButton>
          
        }
        title={userID}
        subheader={location}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {writeTime}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>
      
    </Card>
  );
}
export default RecipeReviewCard;
