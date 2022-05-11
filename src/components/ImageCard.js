import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function MultiActionAreaCard({ photo }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={photo.src.original}
          alt={photo.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {photo.alt}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {photo.photographer}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={photo.url}>Share</a>
        </Button>
      </CardActions>
    </Card>
  );
}




export default MultiActionAreaCard;