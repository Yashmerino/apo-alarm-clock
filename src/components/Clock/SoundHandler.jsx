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
    <FormControl sx={{ m: 10, minWidth: "25%" }} size="small">
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
      <Stack direction="row" spacing={2} mt="2%">
        <Button
          variant="contained"
          onClick={() => soundPlay(props.sound)}
          disabled={props.sleeping}
        >
          Preview
        </Button>
        <Button
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
