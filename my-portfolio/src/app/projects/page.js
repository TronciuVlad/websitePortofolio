"use client";

import { useState } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import ProjectCard from '@/components/ProjectCard';
import TagFilter from '@/components/TagFilter';
import { projects } from '@/data/project';

export default function Projects() {
  const [activeTags, setActiveTags] = useState([]);
  const [showShortVersion, setShowShortVersion] = useState(true);

  const filteredProjects = projects.filter((project) =>
    activeTags.length === 0 || project.tags.some((tag) => activeTags.includes(tag))
  );

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h2">
          My Projects
        </Typography>
        <Button
          variant="contained"
          onClick={() => setShowShortVersion(!showShortVersion)}
          sx={{
            ml: 2, 
            backgroundColor: 'rgba(0, 61, 255, 0.5)',
            border: 'none',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0, 61, 255, 0.7)',
            },
          }}
        >
          {showShortVersion ? 'Show Long Descriptions' : 'Show Short Descriptions'}
        </Button>
      </Box>

      <TagFilter activeTags={activeTags} setActiveTags={setActiveTags} />

      <Grid container spacing={4}>
        {filteredProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              name={project.name}
              description={showShortVersion ? project.descriptionShort : project.descriptionLong}
              link={project.link}
              tags={project.tags}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
