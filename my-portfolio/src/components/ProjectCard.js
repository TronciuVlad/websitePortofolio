import { Card, CardContent, CardActions, Typography, Button, Chip, Box } from '@mui/material';

export default function ProjectCard({ name, description, link, tags }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        {/* Display Tags */}
        <Box sx={{ mt: 2 }}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank">
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}
