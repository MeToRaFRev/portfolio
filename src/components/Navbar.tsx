import React, { JSX } from "react";
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
import { ThemeProps } from "../types/Theme"; // adjust path as needed
import scroll from "../utils/scroll"; // adjust path as needed

function Navbar(props: ThemeProps): JSX.Element {
  const { theme, setTheme } = props;
  const currentTheme = useTheme();

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
        {/* Center section: Title */}
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
            <Button
              onClick={() => scroll(0, 1000)}
              sx={{ mr: 2, color: currentTheme.palette.text.primary }}
            >
              Home
            </Button>
            <Button
              onClick={() => scroll(window.innerHeight - 75, 1000)}
              sx={{ mr: 2, color: currentTheme.palette.text.primary }}
            >
              Skills
            </Button>
            <Button
              onClick={() => scroll(window.innerHeight + 500, 1000)}
              sx={{ mr: 2, color: currentTheme.palette.text.primary }}
            >
              Projects
            </Button>
            <Button
              onClick={() => scroll(window.innerHeight + 900, 1000)}
              sx={{ mr: 2, color: currentTheme.palette.text.primary }}
            >
              Contact
            </Button>
          </Box>
          <Box sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
            <ThemeSwitch theme={theme} setTheme={setTheme} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
