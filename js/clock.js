setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    // if we want date we're gonna have to work with this -4 that I did to shift timezones
    let hour =
        time.getUTCHours() - 4;
    if (hour < 0) {
        hour = 24 + hour;
    }
    let min =
        time.getMinutes();
    am_pm = "AM";

    if (hour >= 12) {
        if (hour > 12)
            hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour =
        hour < 10
            ? "0" + hour
            : hour;
    min =
        min < 10
            ? "0" + min
            : min;

    let currentTime =
        hour +
        ":" +
        min +
        am_pm;

    document.getElementById(
        "clock"
    ).innerHTML =
        currentTime;
}