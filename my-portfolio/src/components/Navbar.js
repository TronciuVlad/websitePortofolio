import { AppBar, Toolbar, Button, Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  return (
    <AppBar 
      position="static"
      sx={{ 
        backgroundColor: 'transparent', // Transparent navbar
        boxShadow: 'none',  // Remove default shadow
      }}
    >
      <Toolbar>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexGrow: 1, // Center the items
            gap: 3, // Space between the buttons
          }}
        >
          <Button 
            color="inherit" 
            component={Link} 
            href="/" 
            sx={{
              fontWeight: pathname === '/' ? 'bold' : 'normal', // Highlight the active page
              borderBottom: pathname === '/' ? '2px solid white' : 'none',
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            href="/projects" 
            sx={{
              fontWeight: pathname === '/projects' ? 'bold' : 'normal',
              borderBottom: pathname === '/projects' ? '2px solid white' : 'none',
            }}
          >
            Projects
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            href="/about" 
            sx={{
              fontWeight: pathname === '/about' ? 'bold' : 'normal',
              borderBottom: pathname === '/about' ? '2px solid white' : 'none',
            }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            href="/contact" 
            sx={{
              fontWeight: pathname === '/contact' ? 'bold' : 'normal',
              borderBottom: pathname === '/contact' ? '2px solid white' : 'none',
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
