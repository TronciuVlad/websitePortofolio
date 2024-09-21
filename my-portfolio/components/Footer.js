import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 2, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2" color="inherit">
        © 2024 Your Name
      </Typography>
    </Box>
  );
}
