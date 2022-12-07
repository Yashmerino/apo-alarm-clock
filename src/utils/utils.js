import alarmDefault from "../assets/clock-alarm.mp3";
import alarmAlien from "../assets/alien.mp3";
import alarmNature from "../assets/nature.mp3";
import alarmMilitary from "../assets/military.mp3";
import Sounds from "./sounds";

const padTo2Digits = (num) => {
  return String(num).padStart(2, "0");
};

export const returnCurrentTime = () => {
  return (
    padTo2Digits(new Date().getHours()) +
    ":" +
    padTo2Digits(new Date().getMinutes())
  );
};

export const returnTime = (hours, minutes) => {
  return padTo2Digits(hours) + ":" + padTo2Digits(minutes);
};

export const soundPlay = (sound) => {
  let audio = document.getElementById("audio");
  switch (sound) {
    case Sounds.DEFAULT:
      audio.src = alarmDefault;
      break;
    case Sounds.ALIEN:
      audio.src = alarmAlien;
      break;
    case Sounds.NATURE:
      audio.src = alarmNature;
      break;
    case Sounds.MILITARY:
      audio.src = alarmMilitary;
      break;
  }
  audio.play();
};

export const soundStop = () => {
  let audio = document.getElementById("audio");
  audio.pause();
  audio.currentTime = 0;
};
