import React, { Fragment } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <Typography variant="h5">Ted Chait | Developer</Typography>
        </Box>
        <Typography variant="h6">
          <AnchorLink to="/#about">About</AnchorLink>
          <AnchorLink to="/#projects">Projects</AnchorLink>
          <AnchorLink to="/#contact">Contact</AnchorLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
