import alarmDefault from "./assets/clock-alarm.mp3";

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

export const soundPlay = () => {
  let audio = document.getElementById("audio");
  audio.src = alarmDefault;
  audio.play();
};

export const soundStop = () => {
  let audio = document.getElementById("audio");
  audio.pause();
  audio.currentTime = 0;
};
