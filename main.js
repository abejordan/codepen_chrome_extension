var xhttp = new XMLHttpRequest();
document.addEventListener('DOMContentLoaded', function () {
  unfade(document.getElementById('overlay'))
  var codepen = codepenLoad();
  codepen.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var url = response['data'][0].link;
      document.getElementById("core").src = url + "?embed-version=2";
    }
  };
  document.getElementById('core').onload = function() {
    fade(document.getElementById('overlay'))
  }
});
function codepenLoad() {
  var random = getRandomInt(150);
  xhttp.open("GET", "https://cpv2api.com/pens/popular" + "?page=" + random, true);
  xhttp.send();
  return xhttp;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.2;
  }, 10);
}
function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.01;
  }, 1);
}