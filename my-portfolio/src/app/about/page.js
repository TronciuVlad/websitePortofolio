"use client";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import '@/app/carousel-custom.css';

export default function About() {
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          Hi, I'm Vlad Tronciu, a fourth-year MSc Computer Science student at the University of St. Andrews. Originally from Bucharest, Romania, I've always had a deep-rooted curiosity about how things work. Whether it was learning about the universe, understanding the complex systems around us, or, eventually, diving into the world of computers, I’ve been driven by an innate desire to explore and create. That passion has led me to where I am today—pursuing a degree in one of the most exciting and rapidly evolving fields, computer science.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Why Computer Science?
        </Typography>
        <Typography variant="body1" gutterBottom>
          From an early age, I was captivated by science. I would devour any information I could find about the solar system, our planet, and how the universe operates. My fascination with complex systems naturally led me toward engineering, and by the time I entered high school, I had discovered computers. I was amazed by their power and versatility, and how something that seemed so simple could shape the future. Through competitions and events, I had the opportunity to meet brilliant minds in the field, which only reinforced my desire to pursue computer science as a career.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Why St. Andrews?
        </Typography>
        <Typography variant="body1" gutterBottom>
          When the time came to choose my university, I knew I wanted to attend an institution that emphasized research, innovation, and real-world application. The University of St. Andrews offered exactly that—prestige, practical learning, and a strong commitment to science. I’ve been lucky to experience all of that firsthand, and it’s been a place where I’ve been able to constantly evolve, discovering new areas of interest within this vast field.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          What do I see my career looking like?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Computer science is an enormous field with so many subfields to explore, and during my studies, I’ve started to carve out my own path. I've developed a strong interest in software development, with experience in languages like Java and C. I've also delved into web development and machine learning, both of which excite me and present countless opportunities for growth.
        </Typography>
        <Typography variant="body1" gutterBottom>
          However, if I had to pinpoint my ultimate dream, it would be working with quantum computers. Quantum computing represents the pinnacle of technology, and I feel incredibly fortunate to be part of the generation that will shape its future. My goal is to one day contribute to this cutting-edge field and help realize the full potential of quantum machines. But until that opportunity arises, I’m equally passionate about creating software and contributing to technological solutions in the present.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          What pushes me forward?
        </Typography>
        <Typography variant="body1" gutterBottom>
          At my core, I am a creator. Whether it’s drawing, writing stories and poems as a kid, or making music, I’ve always been driven by the desire to create something new. That same creative drive is what fuels my passion for software development. I love the idea that you can start with a blank slate—just a computer, some code—and build something that didn’t exist before. There’s a unique thrill in solving a problem or bringing an idea to life through software.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          What are my hopes for the future?
        </Typography>
        <Typography variant="body1" gutterBottom>
          I also recognize that much of my future work will be done in collaboration with others, working on projects where the ideas aren’t always my own. But that’s something I look forward to. Whether it’s helping bring someone else’s vision to life or being part of a larger team working toward a common goal, I’m excited about contributing to something bigger than myself.
        </Typography>
        <Typography variant="body1" gutterBottom>
          In 5-10 years, I see myself working alongside a team of like-minded individuals, solving real-world problems through software development or other technologies. What excites me most is the idea of waking up every day and knowing that, by the time I go to bed, I’ll have created something new—something that didn’t exist when I woke up. That’s what drives me: the joy of creation and the knowledge that I’ve made something meaningful.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false}
          interval={4000}
          stopOnHover
        >
          <div className="carousel-slide">
            <img 
              src="/autovortex.jpg" 
              alt="Autovortex Robotics" 
              className="carousel-image" 
            />
            <Typography variant="caption" className="carousel-caption">
              Representing Romania at international robotics competitions as the Programming Lead in the National Team.
            </Typography>
          </div>
          <div className="carousel-slide">
            <img 
              src="/nasa.jpg" 
              alt="NASA Hackathon" 
              className="carousel-image" 
            />
            <Typography variant="caption" className="carousel-caption">
              Representing Romania at a competition organised by NASA.
            </Typography>
          </div>
          <div className="carousel-slide">
            <img 
              src="/graduation.jpg" 
              alt="Graduation" 
              className="carousel-image" 
            />
            <Typography variant="caption" className="carousel-caption">
              Graduation from St Sava National College, with 1st Prize.
            </Typography>
          </div>
          <div className="carousel-slide">
            <img 
              src="/pier.jpg" 
              alt="St. Andrews Pier" 
              className="carousel-image" 
            />
            <Typography variant="caption" className="carousel-caption">
              First Pier Walk in St Andrews, a University tradition.
            </Typography>
          </div>
          <div className="carousel-slide">
            <img 
              src="/paper.jpg" 
              alt="Research Paper" 
              className="carousel-image" 
            />
            <Typography variant="caption" className="carousel-caption">
              Presenting the paper I've authored at the Computer Science Department's open days to other researchers and people from the industry.
            </Typography>
          </div>
          <div className="carousel-slide">
            <img 
              src="/commitee.jpg" 
              alt="Committee Work" 
              className="carousel-image" 
            />
            <Typography variant="caption" className="carousel-caption">
              Move in day for 800 people! Very busy.
            </Typography>
          </div>
        </Carousel>
      </Box>
    </>
  );
}
