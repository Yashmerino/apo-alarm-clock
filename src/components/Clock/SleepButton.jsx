import React from "react";
import { Button } from "@mui/material";

const SleepButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{ width: "25%", marginTop: "5%" }}
      onClick={() => props.setLight(props.light ? false : true)}
    >
      Go to Sleep
    </Button>
  );
};

export default SleepButton;
