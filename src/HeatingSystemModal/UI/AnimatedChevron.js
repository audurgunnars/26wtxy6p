import React from 'react';
import {
  IconButton,
} from '@mui/joy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AnimatedChevron({ rotation = 0 }) {
  return (
    <IconButton
      sx={{
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease', // Adds a smooth rotation animation
      }}
    >
      <ExpandMoreIcon />
    </IconButton>
  );
}

export default AnimatedChevron;
