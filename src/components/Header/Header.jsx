import { Typography, Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      display="flex"
      textAlign="center"
      minHeight="25%"
      width="35%"
      mt="2.5%"
      mr="2.5%"
      ml="3.5%"
      sx={{ flexDirection: 'column' }}
    >
      <Typography variant="h5" style={{color: "#9EBBD8", fontWeight: 900, fontSize: "64px", userSelect: "none", alignContent: "flex-end" }}>Apo Alarm Clock</Typography>
      <Typography variant="subtitle1" style={{color: "#FAAFB4", fontWeight: 700, fontSize: "20px", lineHeight: 1, userSelect: "none"}}>Never be late again</Typography>
    </Box>
  );
};

export default Header;
