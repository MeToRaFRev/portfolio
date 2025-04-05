// src/themes/lightTheme.js
import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00e717',        // Primary violet
      contrastText: '#ffffff',
    },
    background: {
      default: '#f9fafb',     // Light grayish background (gentle for eyes)
      paper: '#ffffff',       // Clean white cards
    },
    text: {
      primary: '#111827',     // Deep slate grey (excellent readability)
      secondary: '#6b7280',   // Muted grey (soft contrast)
    },
  },
  typography: {
    fontFamily: [
      'ui-sans-serif',
      'system-ui',
      'Inter',                // Suggested modern font for professional design
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ].join(','),
    fontSize: 16,
  },
});

export default lightTheme;
