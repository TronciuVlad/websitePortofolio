import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

export default function ProjectCard({ name, description, link }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank">
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}
