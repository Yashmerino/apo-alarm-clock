import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import Select from "@mui/material/Select";
import Sounds from "../../utils/sounds";
import { soundPlay, soundStop } from "../../utils/utils";

const SoundHandler = (props) => {
  const handleChange = (event) => {
    props.setSound(event.target.value);
  };

  return (
    <FormControl sx={{ mt: "6%", width: "96%" }} size="small">
      <InputLabel id="sound-menu">Alarm Sound</InputLabel>
      <Select
        labelId="sound-menu-select"
        id="sound-menu-select"
        value={props.sound}
        label="Alarm Sound"
        onChange={handleChange}
        disabled={props.sleeping}
      >
        <MenuItem value={Sounds.DEFAULT}>Default</MenuItem>
        <MenuItem value={Sounds.ALIEN}>Alien</MenuItem>
        <MenuItem value={Sounds.NATURE}>Nature</MenuItem>
        <MenuItem value={Sounds.MILITARY}>Military</MenuItem>
      </Select>
      <Stack direction="row" mb="10%" height="5%" mt="2%">
        <Button
          sx={{
            width: "35%",
            fontSize: "12px",
            borderRadius: "15px",
            backgroundColor: "#9EBBD8",
            height: "2%"
          }}
          variant="contained"
          onClick={() => soundPlay(props.sound)}
          disabled={props.sleeping}
        >
          Preview
        </Button>
        <Button
          sx={{
            width: "35%",
            fontSize: "12px",
            borderRadius: "15px",
            backgroundColor: "#9EBBD8",
            height: "2%",
            marginLeft: "5%"
          }}
          variant="contained"
          onClick={() => soundStop()}
          disabled={props.sleeping}
        >
          Stop
        </Button>
      </Stack>
    </FormControl>
  );
};

export default SoundHandler;
