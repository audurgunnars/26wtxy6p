import React from 'react';
import { FormLabel } from '@mui/joy';
import theme from './theme';

function StyledFormLabel({ label }) {
  return (
    <FormLabel sx={{
      m: 0,
      p: 0,
      fontSize: '0.8rem',
      color: theme.palette.lightGrey,
    }}
    >
      {label}
    </FormLabel>
  );
}

export default StyledFormLabel;
