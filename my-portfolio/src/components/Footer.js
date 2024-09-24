import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      sx={{ 
        bgcolor: 'transparent', // Make the background transparent
        p: 2, 
        mt: 4, 
        textAlign: 'center' 
      }}
    >
      <Typography 
        variant="body2" 
        sx={{ 
          color: 'rgba(255, 255, 255, 0.5)' // Set text to white with 50% opacity
        }}
      >
        © 2024 Vlad Tronciu
      </Typography>
    </Box>
  );
}
