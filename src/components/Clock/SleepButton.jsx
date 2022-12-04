import React from "react";
import { Button } from "@mui/material";

const SleepButton = (props) => {
  const onClick = (e) => {
    e.preventDefault();

    props.setLight(props.light ? false : true);
  };

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
