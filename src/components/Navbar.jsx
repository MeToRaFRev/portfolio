import React from 'react';
import { AppBar, Toolbar, Typography, Box, Divider, Button } from '@mui/material';
import ThemeSwitch from './ThemeSwitch';
import { useTheme } from '@mui/material/styles';
import { scrollToPosition } from '../hooks/useCustomSmoothScroll'; // adjust path as needed

function Navrbar(props) {
  const { theme, setTheme } = props;
  const currentTheme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(5, 5, 5, 0.062)"
      }}
    >
      <Toolbar>
        {/* Left section (empty if no content is needed) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }} />

        {/* Center section: Title */}
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: currentTheme.palette.text.primary
          }}
        >
          Aviel Levy
        </Typography>
        <Divider orientation="vertical" sx={{ height: '60px', mx: 2, display: { xs: 'none', md: 'block' } }} />
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button
              onClick={() => scrollToPosition(0,1000)}
              sx={{ mr: 2, color: currentTheme.palette.text.primary }}
            >
              Home
            </Button>
            <Button
              onClick={() => scrollToPosition(window.innerHeight - 75, 1000)}
              sx={{ mr: 2, color: currentTheme.palette.text.primary }}
            >
              Skills
            </Button>
            <Button
              onClick={() => scrollToPosition(window.innerHeight + 500, 1000)}
              sx={{ mr: 2, color: currentTheme.palette.text.primary }}
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToPosition(window.innerHeight + 900, 1000)}
              sx={{ mr: 2, color: currentTheme.palette.text.primary }}
            >
              Contact
            </Button>
          </Box>
          {/* Optionally show a vertical divider for spacing */}

          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navrbar;
