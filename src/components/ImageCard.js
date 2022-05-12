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
      <Card className="card-container" padding={2} 
      sx={{ 
        width: '100%',
        display: 'grid',
        marginTop: '50px',
        gridGap: '20px',
      }}>
        <CardActionArea>
          <CardMedia className="card-media" sx={{ 
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
            component="img"
            src={photo.src.original}
            alt={photo.alt}
          />
          <CardContent>
            <Typography className="card-alt" gutterBottom variant="h5" component="div" sx={{ fontWeight: 'light' }}>
              {photo.alt}
            </Typography>
            <Typography className="card-photographer" gutterBottom variant="h6" component="div">
              Photo By {photo.photographer}
            </Typography>
          </CardContent>
          <CardActions className="card-actions">
            <IconButton className="favorite-icon"         aria-label="add to favorites" >
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