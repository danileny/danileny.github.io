var res = document.getElementById("res");

function getCurrentDate() {
    var date = new Date();
    var day = date.toLocaleDateString('en-us',{day:"numeric"});
    var dayName = date.toLocaleDateString('en-us',{weekday:'long'});
    var month = date.toLocaleDateString('en-us',{month:"numeric"});
    var monthName = date.toLocaleString('en-us',{month:'long'});
    var year = date.toLocaleDateString('en-us',{year:"numeric"});
    return ([day, dayName, month, monthName, year]);
}

function showDate() {
    res.innerHTML = getCurrentDate();
}

function resetDate() {
    res.innerHTML = "..."
}