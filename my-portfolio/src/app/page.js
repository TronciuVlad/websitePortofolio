import { Typography, Button, Box } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Vlad Tronciu
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Software Developer specializing in C/C++, Java, Full Stack Development, and Machine Learning
      </Typography>
      <Button variant="contained" color="primary" href="/projects">
        Explore My Projects
      </Button>
    </Box>
  );
}
