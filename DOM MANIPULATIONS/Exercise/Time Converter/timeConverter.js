function attachEventsListeners() {
    document.getElementById('daysBtn')
        .addEventListener('click', convertFromDays);
    document.getElementById('hoursBtn')
        .addEventListener('click', convertFromHours);
    document.getElementById('minutesBtn')
        .addEventListener('click', convertFromMinutes);
    document.getElementById('secondsBtn')
        .addEventListener('click', convertFromSeconds);

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    function convertFromDays() {
        hours.value = +days.value * 24;
        minutes.value = +hours.value * 60;
        seconds.value = +minutes.value * 60;
    }

    function convertFromHours() {
        days.value = +hours.value / 24;
        minutes.value = +hours.value * 60;
        seconds.value = +minutes.value * 60;
    }

    function convertFromMinutes() {
        seconds.value = +minutes.value * 60;
        hours.value = +minutes.value / 60;
        days.value = +hours.value / 24;
    }

    function convertFromSeconds() {
        minutes.value = +seconds.value / 60;
        hours.value = +minutes.value / 60;
        days.value = +hours.value / 24;
    }
}