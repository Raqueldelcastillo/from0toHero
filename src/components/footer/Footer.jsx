import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <AppBar position="static" color="">
      <Toolbar>
        <Container>
          <Typography variant="body2" color="inherit">
            Thank you for subscribing to our Resources letter, we appreciate
            your time and we would love to hear from you
          </Typography>
          <IconButton
            color="inherit"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoogleIcon />
          </IconButton>
          {/* Add other icons as needed */}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
