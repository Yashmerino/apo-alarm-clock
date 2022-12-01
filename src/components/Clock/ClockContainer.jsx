import React from "react";
import { Box } from "@mui/material";
import TimePicker from "./TimePicker";

const ClockContainer = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50%"
      mt="10%"
    >
      <TimePicker />
    </Box>
  );
};

export default ClockContainer;
