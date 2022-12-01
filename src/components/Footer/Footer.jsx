import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="20%"
      mr="2.5%"
      ml="2.5%"
      marginTop="calc(5% + 60px)"
      position="fixed"
      bottom="0"
      width="95%"
      flexDirection="column"
    >
      <Typography
        paragraph={true}
        sx={{ userSelect: "none", textAlign: "center" }}
      >
        Once loaded the alarm will work even without internet connection.
        <br /> If you wish to contribute to this project here you can find its{" "}
        <a href="https://github.com/Yashmerino/apoclock-alarm">
          GitHub repository
        </a>
        .
        <br /> Copyright Apo Alarm Clock © 2022. <a href="#">Privacy Policy</a>
      </Typography>
    </Box>
  );
};

export default Footer;
