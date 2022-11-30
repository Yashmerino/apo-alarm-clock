import { Typography, Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="25%"
      mt="1%"
      mr="2.5%"
      ml="2.5%"
      sx={{ flexDirection: 'column' }}
    >
      <Typography variant="h5" style={{fontWeight: 500, userSelect: "none", textAlign: "center" }}>Apo Alarm Clock</Typography>
      <Typography variant="subtitle1" style={{lineHeight: 1, userSelect: "none", textAlign: "center"}}>Never be late again</Typography>
    </Box>
  );
};

export default Header;
