// src/themes/darkTheme.js
import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#72e97d',          // Slightly lighter violet for visibility
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',       // Deep dark grey for true dark mode feel
      paper: '#1f1f1f',         // Slightly lighter grey for card backgrounds
    },
    text: {
      primary: '#f9fafb',       // Near-white for excellent readability
      secondary: '#9ca3af',     // Soft grey to reduce strain
    },
  },
  typography: {
    fontFamily: [
      'ui-sans-serif',
      'system-ui',
      'Inter',                  // Same modern font for consistency
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ].join(','),
    fontSize: 16,
  },
});

export default darkTheme;
