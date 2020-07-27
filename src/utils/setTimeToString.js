export default function setTimeToString(seconds) {
  var hour = parseInt(seconds / 3600);
  var min = parseInt((seconds % 3600) / 60);
  var sec = Math.floor(seconds % 60);
  return hour + ':' + min + ':' + sec;
}