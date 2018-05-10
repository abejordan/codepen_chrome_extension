document.addEventListener('DOMContentLoaded', function () {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response=JSON.parse(this.responseText);
                var url = response['data'][0].link;
                document.getElementById("core").src = url+"?embed-version=2";
            }
          };
          var random = getRandomInt(350);
          xhttp.open("GET", "https://cpv2api.com/pens/popular"+"?page="+random, true);
          xhttp.send();
});
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }