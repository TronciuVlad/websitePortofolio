"use client";

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: "'Gill Sans', Arial, sans-serif",
    allVariants: {
      color: '#ffffff',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            color: '#ffffff',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ffffff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ffffff',
            },
            '&:hover fieldset': {
              borderColor: '#ffffff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ffffff',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&.Mui-focused': {
            color: '#ffffff',
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
        <div className="background-container">
          <video autoPlay muted loop className="video-background">
            <source src="/bg-5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="blur-overlay"></div>
        </div>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Container component="main" sx={{ flex: '1 0 auto', position: 'relative', zIndex: 1 }}>
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
