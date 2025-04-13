import React, { useState } from 'react';
import {
  FormControl,
  Select,
  Option,
  Box,
  Typography,
} from '@mui/joy';
import StyledFormLabel from '../UI/FormLabel';
import theme from '../UI/theme';

const initialOptions = ['Heating circuit 1', 'Heating circuit 2'];

function HeatingCircuitInput() {
  const [options, setOptions] = useState(initialOptions);
  const [value, setValue] = useState(initialOptions[0]);

  const handleSelectChange = (_event, newValue) => {
    if (newValue === 'add_new') {
      const nextNumber = options.length + 1;
      const newOption = `Heating circuit ${nextNumber}`;
      const updatedOptions = [...options, newOption];
      setOptions(updatedOptions);
      setValue(newOption);
    } else {
      setValue(newValue);
    }
  };

  const addNewOption = () => {
    const nextNumber = options.length + 1;
    const newOption = `Heating circuit ${nextNumber}`;
    const updatedOptions = [...options, newOption];
    setOptions(updatedOptions);
  };

  return (
    <Box sx={{ pb: 2 }}>
      <FormControl>
        <StyledFormLabel label="Heizkreis" />
        <Select defaultValue="Heating circuit 1" onChange={handleSelectChange} value={value} variant="outlined" size="sm" sx={{ width: '100%' }}>
          {options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
          <Box key="add_new" value="add_new" onClick={addNewOption}>
            <Typography
              level="body-sm"
              fontWeight={700}
              sx={{
                my: 0.5, ml: 1.5, display: 'flex', color: theme.palette.primary,
              }}
            >
              Heizkreis hinzufügen
            </Typography>
          </Box>
        </Select>
      </FormControl>
    </Box>
  );
}

export default HeatingCircuitInput;
