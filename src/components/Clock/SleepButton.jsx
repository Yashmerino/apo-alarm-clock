import React from "react";
import { Button } from "@mui/material";
import { soundStop } from "../../utils";

const SleepButton = (props) => {
  const onClick = (e) => {
    e.preventDefault();

    props.setLight(props.light ? false : true);
    props.setSleeping(props.sleeping ? false : true);

    if (props.sleeping) {
      soundStop();
      props.setPlaying(false);
    }
  };

  return (
    <Button
      variant="contained"
      sx={{ width: "25%", marginTop: "5%" }}
      onClick={(e) => onClick(e)}
    >
      {props.sleeping ? "Wake up" : "Go to Sleep"}
    </Button>
  );
};

export default SleepButton;
