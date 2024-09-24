import { Typography, Button, Box } from '@mui/material';

export default function Home() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexGrow: 1, // Ensure the content grows to fill available space
        padding: '2rem 0',  // Optional padding
      }}
    >
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(300px, 1.5fr) 2px 1.5fr',  // Make left side bigger while keeping line centered
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '75vh',
          maxHeight: '75vh',  // Set the maximum height for the content
          width: '100vw'
        }}
      >
        {/* Left side with the full image */}
        <Box 
          sx={{ 
            backgroundImage: 'url(/me.png)',  // Reference to your image
            backgroundPosition: 'left center',  // Show the left half of the image
            backgroundSize: '150%',  // Double the size so only half is visible
            backgroundRepeat: 'no-repeat',
            height: '100%',  // Ensure it takes up the full height
            width: '100%',  // Takes up the full width of the left column
            overflow: 'hidden',  // Ensure anything outside the box is hidden
          }} 
        />

        {/* Vertical line */}
        <Box 
          sx={{ 
            width: '2px', 
            height: '100%', 
            backgroundColor: 'white', 
          }} 
        />

        {/* Right side content */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            justifyContent: 'center',
            ml: 4,  // Optional spacing between line and content
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Vlad Tronciu
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Software Developer
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            C/C++
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Java
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Web
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            ML
          </Typography>
          <Button variant="contained" color="primary" href="/projects">
            Explore My Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
