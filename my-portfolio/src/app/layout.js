"use client";

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a custom theme that uses Gill Sans as the default font
const theme = createTheme({
  typography: {
    fontFamily: "'Gill Sans', Arial, sans-serif",  // Set Gill Sans as the default font
    allVariants: {
      color: '#ffffff',  // Ensure all text in typography uses white color
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            color: '#ffffff', // Set input text color to white
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ffffff', // White underline
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ffffff', // White border for outlined input
            },
            '&:hover fieldset': {
              borderColor: '#ffffff', // White border on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ffffff', // White border when focused
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Set label text color to white
          '&.Mui-focused': {
            color: '#ffffff', // Keep label white when focused
          },
        },
      },
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: '#00001a', 
        color: '#ffffff', 
        textAlign: 'center', 
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'auto'
      }}>
        {/* Blur and video background are now inside a div that goes behind everything */}
        <div className="background-container">
          {/* Video background */}
          <video autoPlay muted loop className="video-background">
            <source src="/bg-5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Blur overlay */}
          <div className="blur-overlay"></div>
        </div>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Container component="main" sx={{ flex: '1 0 auto', position: 'relative', zIndex: 1 }}>
            {children}
          </Container>
          {/* Footer remains above the blur */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
