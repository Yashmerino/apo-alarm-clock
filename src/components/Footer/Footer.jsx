import React from "react";
import { Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="left"
      alignItems="left"
      height="15%"
      mr="2.5%"
      ml="5%"
      mt="5%"
      bottom="0"
      width="95%"
      flexDirection="column"
    >
      <Typography
        paragraph={true}
        sx={{ userSelect: "none", fontSize: "24px", fontWeight: 900 }}
      >
        Once loaded the alarm will work even
        <br /> without internet connection.
      </Typography>
      <Typography
        sx={{ userSelect: "none", fontSize: "14px" }}
        paragraph={true}
      >
        Copyright Apo Alarm Clock © 2022.&nbsp; &nbsp;&nbsp; &nbsp;
        <Link href="privacy_policy.html" sx={{ color: "#FAAFB4" }}>
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
