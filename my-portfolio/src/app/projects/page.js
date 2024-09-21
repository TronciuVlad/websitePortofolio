import { Grid, Typography } from '@mui/material';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    name: 'Full Stack Web Application',
    description: 'Developed automated reporting with Java Spring and Vue.js frontend.',
    link: 'https://github.com/fullstack-project',
  },
  {
    name: 'License Plate Recognition System',
    description: 'Machine learning model using TensorFlow and OpenCV to recognize license plates.',
    link: 'https://github.com/ml-anpr',
  },
  {
    name: 'Concurrency and Threading in C',
    description: 'Implemented a multithreading library in C to optimize operating system processes.',
    link: 'https://github.com/c-concurrency',
  },
  {
    name: 'Game Development with C++ and OpenGL',
    description: 'Developed a 3D game engine using C++ and OpenGL for real-time rendering.',
    link: 'https://github.com/cpp-opengl-game',
  },
];

export default function Projects() {
  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              name={project.name}
              description={project.description}
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
