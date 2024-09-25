import { Card, CardContent, CardActions, Typography, Button, Chip, Box } from '@mui/material';

export default function ProjectCard({ name, description, link, tags }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '10px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#e0e0e0' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: '#b0b0b0' }}>
          {description}
        </Typography>

        <Box sx={{ mt: 2 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                borderRadius: '5px',
                padding: '3px 8px',
                fontSize: '0.85rem',
                marginRight: '5px',
                marginBottom: '5px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            />
          ))}
        </Box>
      </CardContent>

      {link && (
        <CardActions>
          <Button
            size="small"
            href={link}
            target="_blank"
            sx={{
              color: '#00bfff',
              textDecoration: 'none',
              fontWeight: 'bold',
              borderBottom: '2px solid transparent',
              transition: 'color 0.3s ease, border-bottom 0.3s ease',
              '&:hover': {
                color: '#ffffff',
                borderBottom: '2px solid #00bfff',
              },
            }}
          >
            View Project
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
