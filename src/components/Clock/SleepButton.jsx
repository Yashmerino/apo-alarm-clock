import React from "react";
import { Button } from "@mui/material";

const SleepButton = (props) => {
  const onClick = (e) => {
    e.preventDefault();

    props.setLight(props.light ? false : true);
    props.setAlarmTime(document.getElementById(":r1:").value);
  }

  return (
    <Button
      variant="contained"
      sx={{ width: "25%", marginTop: "5%" }}
      onClick={(e) => onClick(e)}
    >
      Go to Sleep
    </Button>
  );
};

export default SleepButton;
