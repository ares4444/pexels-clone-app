import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { CardActionArea, CardActions } from '@mui/material';

function MultiActionAreaCard({ photo }) {

  return (
      <Card padding={2}>
        <CardActionArea>
          <CardMedia sx={{ 
              width: '100%',
              height: "100%",
              objectFit: 'cover'
            }}
            component="img"
            src={photo.src.original}
            alt={photo.alt}
          />
          <CardContent>
            <Typography className="card-alt" gutterBottom variant="h5" component="div" sx={{ fontWeight: 'light' }}>
              {photo.alt}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Photo By {photo.photographer}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>
  );
}




export default MultiActionAreaCard;