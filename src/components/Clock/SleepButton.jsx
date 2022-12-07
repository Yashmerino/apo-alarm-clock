import React from "react";
import { Button } from "@mui/material";
import { soundStop } from "../../utils/utils";

const SleepButton = (props) => {
  const onClick = (e) => {
    e.preventDefault();

    let isValid = /^([2][0-3]:[0-5][0-9])|([0-1][0-9]:[0-5][0-9])$/.test(
      document.getElementsByTagName("input")[0].value
    );
    if (!isValid) return;

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
      sx={{ width: "25%", marginTop: "2%" }}
      onClick={(e) => onClick(e)}
    >
      {props.sleeping ? "Wake up" : "Go to Sleep"}
    </Button>
  );
};

export default SleepButton;
