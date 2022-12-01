import React from "react";
import { Typography, Box } from "@mui/material";

const ClockContainer = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50%"
      mt="10%"
    >
      <div className="clock"></div>
    </Box>
  );
};

export default ClockContainer;
