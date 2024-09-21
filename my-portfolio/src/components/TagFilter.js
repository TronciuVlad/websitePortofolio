import { Button, Box } from '@mui/material';
import { useState } from 'react';

const availableTags = [
  'Java Software Development',
  'C Software Development',
  'Machine Learning',
  'Web Development',
  'Miscellaneous',
];

export default function TagFilter({ activeTags, setActiveTags }) {
  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      {availableTags.map((tag) => (
        <Button
          key={tag}
          variant={activeTags.includes(tag) ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => toggleTag(tag)}
          sx={{ m: 1 }}
        >
          {tag}
        </Button>
      ))}
    </Box>
  );
}
