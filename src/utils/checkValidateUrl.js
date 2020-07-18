function validateYouTubeUrl(url) {
  if (url != undefined || url != '') {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      console.log("true")
      return true
    } else {
      console.log("false")
      return false
    }
  }
}
export default validateYouTubeUrl