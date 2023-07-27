import * as React from "react";
import { Box, Link, Typography } from "@mui/material";

import config from "../Config";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ color: "white" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        voucher application
      </Link>
      {" " + new Date().getFullYear() + " - Version  " + config.appVersion}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      position="absolute"
      bottom="0"
      width="100%"
      height="1.5rem"
      sx={{ bgcolor: config.primaryColor }}
    >
      <Copyright />
    </Box>
  );
}

export default Footer;
// Footer.js
/*import React from "react";

const Footer = () => {
  return <footer>Ceci est le pied de page</footer>;
};

export default Footer;*/
