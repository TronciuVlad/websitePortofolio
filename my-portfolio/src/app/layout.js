import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@mui/material';

export const metadata = {
  title: 'My Portfolio',
  description: 'Software Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        {/* Main content area, flex-grow ensures it takes up available space */}
        <Container component="main" sx={{ flex: '1 0 auto' }}>
          {children}
        </Container>
        {/* Footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
