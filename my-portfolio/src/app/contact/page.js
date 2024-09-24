"use client";
import { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [sent, setSent] = useState(false);

  emailjs.init('QGnjx-RF9_KgV7q_Q');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service-hello', 'template_hello', e.target)
      .then(() => {
        console.log('Message sent successfully!');
        setSent(true);
      }, (error) => {
        console.log('Failed to send message...', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 0, p: 3, maxWidth: '600px', mx: 'auto' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Me
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Email
        </Typography>
        <Typography variant="body1" gutterBottom>
          tronciu.vlad.uk@gmail.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          vt29@st-andrews.ac.uk
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Phone
        </Typography>
        <Typography variant="body1" gutterBottom>
          +44 07743909274
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Connect with me:
        </Typography>
        <Button href="https://www.linkedin.com/in/tronciu-vlad-5a7117240/" startIcon={<LinkedInIcon />} sx={{ mr: 2 }} color="primary" variant="outlined">
          LinkedIn
        </Button>
        <Button href="https://github.com/TronciuVlad" startIcon={<GitHubIcon />} color="primary" variant="outlined">
          GitHub
        </Button>
      </Box>

      <Box component="form" sx={{ mt: 3, textAlign: 'left' }} onSubmit={sendEmail}>
        <Typography variant="h6" gutterBottom>
          Send me a message
        </Typography>
        <TextField 
          label="Your Name" 
          fullWidth 
          sx={{ mb: 2 }} 
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
        <TextField 
          label="Your Email" 
          fullWidth 
          sx={{ mb: 2 }} 
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
        />
        <TextField 
          label="Your Message" 
          fullWidth 
          multiline 
          rows={4} 
          sx={{ mb: 2 }} 
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
        {sent && <Typography variant="body2" color="success.main">Message sent successfully!</Typography>}
      </Box>
    </Box>
  );
}
