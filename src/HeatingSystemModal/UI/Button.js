import React from 'react';
import { Button, Typography } from '@mui/joy';
import AddIcon from '@mui/icons-material/Add';

function PrimaryButton({
  onClick,
  buttonText,
  customStyles,
  showIcon = true,
}) {
  return (
    <Button
      onClick={onClick}
      variant="solid"
      size="sm"
      sx={{
        px: 1,
        py: 0,
        my: 1,
        backgroundColor: '#5857cb',
        color: '#fff',
        width: 'fit-content',
        display: 'flex',
        ...customStyles,
      }}
    >
      {showIcon && <AddIcon />}
      <Typography level="body2" sx={{ fontWeight: 'bold' }}>
        {buttonText}
      </Typography>
    </Button>
  );
}

function OutlinedButton({
  onClick,
  buttonText,
}) {
  return (
    <Button onClick={onClick} variant="outlined" color="neutral" size="sm" sx={{ px: 1 }}>
      <Typography level="body2" sx={{ fontWeight: 'bold' }}>
        {buttonText}
      </Typography>
    </Button>
  );
}

export { PrimaryButton, OutlinedButton };
