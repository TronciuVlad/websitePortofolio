"use client"

import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import ProjectCard from '@/components/ProjectCard';
import TagFilter from '@/components/TagFilter';
import { projects } from '@/data/project';

export default function Projects() {
  const [activeTags, setActiveTags] = useState([]);

  // Filter projects based on active tags
  const filteredProjects = projects.filter((project) =>
    activeTags.length === 0 || project.tags.some((tag) => activeTags.includes(tag))
  );

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        My Projects
      </Typography>

      {/* Tag Filter Component */}
      <TagFilter activeTags={activeTags} setActiveTags={setActiveTags} />

      {/* Project Cards */}
      <Grid container spacing={4}>
        {filteredProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              name={project.name}
              description={project.description}
              link={project.link}
              tags={project.tags} // Pass tags array to ProjectCard
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
