import React from 'react';
import { Typography, Box, IconButton } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';

export function ModalHeader({ onClose }) {
  return (
    <Box
      sx={{
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography level="h4">Heizflächen hinzufügen</Typography>
      <IconButton
        onClick={onClose}
        variant="plain"
        color="neutral"
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
}
