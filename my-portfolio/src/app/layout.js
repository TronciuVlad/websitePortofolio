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
