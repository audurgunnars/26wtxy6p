import React, { useState } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/joy';
import CheckCircleIcon from '@mui/icons-material/CheckOutlined';
import AccordionItemForm from './AccordionItemForm';
import { PrimaryButton } from '../UI/Button';
import theme from '../UI/theme';
import AnimatedChevron from '../UI/AnimatedChevron';

function AccordionItem({ label, isFirst }) {
  const [expanded, setExpanded] = useState(isFirst);
  const [added, setAdded] = useState(false);

  const addItem = () => {
    setAdded(true);
    setExpanded(false);
  };

  const checkIconStyles = {
    '@keyframes popIn': {
      '0%': { transform: 'scale(0)', opacity: 0 },
      '80%': { transform: 'scale(1.2)', opacity: 1 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    },
    animation: 'popIn 0.4s ease-out',
    color: theme.palette.success,
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} size="lg">
      <AccordionSummary sx={{ p: 0 }} indicator={null}>
        <Box sx={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
        }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatedChevron rotation={expanded ? 0 : -90} />
            <Typography level="title-sm" fontWeight={700}>
              {label}
            </Typography>
          </Box>
          {added && <CheckCircleIcon sx={checkIconStyles} color="success" />}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <AccordionItemForm />
        <PrimaryButton onClick={addItem} variant="solid" buttonText="Hinzufügen" color={theme.palette.primary} customStyles={{ alignSelf: 'flex-end' }} />
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;
