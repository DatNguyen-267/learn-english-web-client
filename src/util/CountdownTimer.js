import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs * 1000);
  const now = dayjs();
  return {
    seconds: getRemainingSeconds(now, timestampDayjs),
    minutes: getRemainingMinutes(now, timestampDayjs),
    hours: getRemainingHours(now, timestampDayjs),
    days: getRemainingDays(now, timestampDayjs),
  };
}

function getRemainingSeconds(now, timestampDayjs) {
  const seconds = timestampDayjs.diff(now, "seconds") % 60;
  // console.log(seconds);
  return padWithZeros(seconds, 2);
}
function getRemainingMinutes(now, timestampDayjs) {
  const minutes = timestampDayjs.diff(now, "minutes") % 60;
  return padWithZeros(minutes, 2);
}
function getRemainingHours(now, timestampDayjs) {
  const hours = timestampDayjs.diff(now, "hours") % 24;
  // console.log(hours);
  return padWithZeros(hours, 2);
}
function getRemainingDays(now, timestampDayjs) {
  const days = timestampDayjs.diff(now, "days");
  // console.log(days);
  return days;
}
function padWithZeros(number, minLength) {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
}
