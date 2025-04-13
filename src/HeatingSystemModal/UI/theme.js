import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: '#5857cb',
        success: '#59ba52',
        lightGrey: '#9fa6ad',
      },
    },
  },
});

export default theme;
