import { Typography, Box } from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Feel free to reach out to me via email at tronciu.vlad.uk@gmail.com or vt29@st-andrews.ac.uk.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Phone: +44 07743909274
      </Typography>
    </Box>
  );
}
