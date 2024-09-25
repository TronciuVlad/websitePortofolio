import { Card, CardContent, CardActions, Typography, Button, Chip, Box } from '@mui/material';

export default function ProjectCard({ name, description, link, tags }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent dark background
        borderRadius: '10px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)', // Subtle shadow for depth
        backdropFilter: 'blur(6px)', // Blurs the background slightly behind the card
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)', // Lift effect on hover
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.7)', // Deeper shadow on hover
        },
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: '#e0e0e0',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
            letterSpacing: '0.5px',
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: '#b0b0b0', lineHeight: 1.6 }} // Softer text color
        >
          {description}
        </Typography>

        {/* Display Tags */}
        <Box sx={{ mt: 2 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Softer background for the tags
                color: '#ffffff',
                borderRadius: '5px',
                padding: '3px 8px',
                fontSize: '0.85rem',
                marginRight: '5px',
                marginBottom: '5px',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            />
          ))}
        </Box>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          href={link}
          target="_blank"
          sx={{
            color: '#00bfff', // Light blue color for the button text
            textDecoration: 'none',
            fontWeight: 'bold',
            borderBottom: '2px solid transparent',
            transition: 'color 0.3s ease, border-bottom 0.3s ease',
            '&:hover': {
              color: '#ffffff',
              borderBottom: '2px solid #00bfff', // Underline effect on hover
            },
          }}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}
