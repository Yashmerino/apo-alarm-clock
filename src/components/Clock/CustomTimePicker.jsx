import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { returnCurrentTime } from "../../utils";

const CustomTimePicker = (props) => {
  const [currentTime, setCurrentTime] = useState(returnCurrentTime());
  const [value, setValue] = useState(null);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(returnCurrentTime()),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={"Current time: " + returnCurrentTime()}
        value={value}
        ampm={false}
        onChange={(newValue) => {
          setCurrentTime(newValue);
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} sx={{ width: "25%" }}/>}
        disabled={!props.light}
      />
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
