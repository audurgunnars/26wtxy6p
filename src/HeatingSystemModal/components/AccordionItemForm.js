import React from 'react';
import {
  FormControl,
  Input,
  Stack,
  Box,
  Select,
  Option,
} from '@mui/joy';
import StyledFormLabel from '../UI/FormLabel';
import ShowMore from './ShowMore';

function SelectInputWithHardcodedOptions() {
  return (
    <Select placeholder="Eingabe">
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  );
}

function AccordionItemForm() {
  return (
    <Box sx={{ p: 1 }}>
      <Stack direction="row" spacing={3}>
        <FormControl sx={{ flex: 1 }}>
          <StyledFormLabel label="Heizkörper Art" />
          <SelectInputWithHardcodedOptions />
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <StyledFormLabel label="Heizkörper Typ" />
          <SelectInputWithHardcodedOptions />
        </FormControl>
      </Stack>
      <Stack direction="row" spacing={3} mt={1}>
        <FormControl sx={{ flex: 1 }}>
          <StyledFormLabel label="Höhe (mm)" />
          <Input placeholder="Eingabe" type="number" />
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <StyledFormLabel label="Länge (mm)" />
          <Input placeholder="Eingabe" type="number" />
        </FormControl>
      </Stack>
      <ShowMore />
    </Box>
  );
}

export default AccordionItemForm;
