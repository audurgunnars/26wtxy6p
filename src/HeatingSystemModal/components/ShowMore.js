import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionGroup,
} from '@mui/joy';
import AnimatedChevron from '../UI/AnimatedChevron';

function ShowMore() {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionGroup size="sm">
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} sx={{ border: 'none', m: 0 }}>
        <AccordionSummary sx={{ p: 0 }} indicator={null}>
          <Box sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
          }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography level="body-sm" fontWeight={700}>
                Show More
              </Typography>
              <AnimatedChevron rotation={expanded ? 180 : 0} />
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography level="body-sm" fontWeight={400} sx={{ mb: 1 }}>
            This is some text to give more context.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}

export default ShowMore;
