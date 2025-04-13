import React from 'react';
import {
  Box,
} from '@mui/joy';
import { OutlinedButton } from '../UI/Button';

export function ModalFooter({ onClose }) {
  return (
    <Box
      sx={{
        p: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <OutlinedButton onClick={onClose} variant="outlined" buttonText="Schließen" />
    </Box>
  );
}
