import { AppBar, Toolbar, Button, Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar 
      position="static"
      sx={{ 
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexGrow: 1,
            gap: 3,
          }}
        >
          <Button 
            color="inherit" 
            component={Link} 
            href="/" 
            sx={{
              fontWeight: pathname === '/' ? 'bold' : 'normal',
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
