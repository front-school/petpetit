import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    // @ts-ignore
    whitesmoke: '#E8EAED',
    primary: {
      main: '#0b5473',
      contrastText: '#fff',
      50: '#e1f4f6',
      100: '#b4e3e9',
      200: '#87d0dc',
      300: '#5fbdd0',
      400: '#45b0ca',
      500: '#2ea3c4',
      600: '#2596b8',
      700: '#1884a6',
      800: '#177393',
      900: '#0b5473',
    },
    secondary: {
      main: '#ffc800',
      contrastText: '#000',
      50: '#fff8df',
      100: '#ffebaf',
      200: '#ffdf7b',
      300: '#ffd342',
      400: '#ffc800',
      500: '#ffbe00',
      600: '#ffb000',
      700: '#ff9c00',
      800: '#ff8a00',
      900: '#ff6800',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
