import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { returnCurrentTime, returnTime } from "../../utils";

const CustomTimePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={
          props.light ? "Current time: " + returnCurrentTime() : "Sleep well :)"
        }
        value={props.value}
        ampm={false}
        onChange={(newValue) => {
          props.setValue(newValue);
          props.setAlarm(returnTime(newValue.$H, newValue.$m));
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ width: "25%" }} />
        )}
        disabled={!props.light}
      />
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
