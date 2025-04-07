import React, { JSX,memo } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "@mui/material/styles";
import { ThemeProps } from "../types/Theme";
import scroll from "../utils/scroll"; 

function Navbar(props: ThemeProps): JSX.Element {
  const { theme, setTheme } = props;
  const currentTheme = useTheme();

  const navItems = [
    { label: "Home", scrollTo: 0 },
    { label: "Skills", scrollTo: window.innerHeight},
    { label: "Projects", scrollTo: window.innerHeight + 750},
    { label: "Contact", scrollTo: window.innerHeight + 1600},
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        height: "65px",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(5, 5, 5, 0.062)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: currentTheme.palette.text.primary,
          }}
        >
          Aviel Levy
        </Typography>
        <Divider
          orientation="vertical"
          sx={{ height: "60px", mx: 2, display: { xs: "none", md: "block" } }}
        />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navItems.map(({ label, scrollTo }) => (
              <Button
                key={label}
                onClick={() => scroll(scrollTo, 1000)}
                sx={{ mr: 2, color: currentTheme.palette.text.primary }}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <ThemeSwitch theme={theme} setTheme={setTheme} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default memo(Navbar);;
