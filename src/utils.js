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
  return (
    padTo2Digits(hours) +
    ":" +
    padTo2Digits(minutes)
  );
};
