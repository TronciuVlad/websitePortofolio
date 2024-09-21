import { Typography } from '@mui/material';

export default function About() {
  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        I am Vlad Tronciu, an MSc Computer Science student at the University of St. Andrews. My expertise includes
        C/C++ programming, Java, Full Stack Web Development, and Machine Learning.
      </Typography>
      <Typography variant="body1" gutterBottom>
        I have experience in developing scalable applications using Python and ML libraries like TensorFlow and PyTorch. I have
        also worked with Java Spring and Vue.js in Full Stack projects and implemented multithreading solutions in C.
      </Typography>
    </>
  );
}
