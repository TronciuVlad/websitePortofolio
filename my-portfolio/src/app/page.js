import { Typography, Button, Box } from '@mui/material';

export default function Home() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexGrow: 1,
        padding: '2rem 0',
      }}
    >
      <Box 
  sx={{ 
    display: 'grid', 
    gridTemplateColumns: 'minmax(300px, 1.5fr) 2px 1.5fr',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '75vh',
    maxHeight: '75vh',
    width: '100vw',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto auto auto',
    },
  }}
>
  <Box 
    sx={{ 
      backgroundImage: 'url(/me.png)',
      backgroundPosition: 'left center',
      backgroundSize: '150%',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      '@media (max-width: 600px)': {
        height: '100%',
        minHeight: '20vh',
        paddingTop: '50px',
      },
    }} 
  />

  <Box 
    sx={{ 
      width: '2px', 
      height: '100%', 
      backgroundColor: 'white',
      '@media (max-width: 600px)': {
        width: '100%',
        height: '2px',
      },
    }} 
  />

  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start', 
      justifyContent: 'center',
      ml: 4,
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
    <Button 
      href="/projects"
      sx={{ 
        backgroundColor: 'rgba(0, 61, 255, 0.5)',
        border: 'none',
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(0, 61, 255, 0.7)',
        },
      }}
    >
      Explore My Projects
    </Button>
  </Box>
</Box>
    </Box>
  );
}
