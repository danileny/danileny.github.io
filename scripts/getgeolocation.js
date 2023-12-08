var res = document.getElementById("res");

function getUserLocation() {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(success, error);
    else res.innerHTML = "Geolocation is not supported by his browser";
}
function error(error) {
    res.innerHTML = "Error <br> Code => " + error.code + "<br>" + "Message +> " + error.message;
        }

function success(position) {
    var coords = position.coords;
    var txt = "";
    //Always returned
    txt = txt + " latitude : " + coords.latitude + "<br>";
    txt = txt + " longitude : " + coords.longitude + "<br>";
    txt = txt + " accuracy : " + coords.accuracy + "<br>";
    //Returned only if avaliable
    txt = txt + " altitude : " + coords.altitude + "<br>";
    txt = txt + " altitudeAccuracy : " + coords.altitudeAccuracy + "<br>";
    txt = txt + " heading : " + coords.heading + "<br>";
    txt = txt + " speed : " + coords.speed + "<br>";
    txt = txt + " timestamp : " + position.timestamp + "<br>";
    res.innerHTML = txt;
}