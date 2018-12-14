function timer() {
    let minutesEl = $('#minutes');
    let hoursEl = $('#hours');
    let secondsEl = $('#seconds');
    let isRunning = false;
    let timer;


    $('#start-timer').on('click', function () {
        if (!isRunning) {
            timer = setInterval(step, 1000);
            isRunning = true;
        }
    });

    $('#stop-timer').on('click', function () {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
        }
    });

    function step() {
        let secondsVal = +secondsEl.text() + 1;
        let minutesVal = +minutesEl.text();
        let hoursVal = +hoursEl.text();

        secondsEl.text(pad(secondsVal, 2));
        if (secondsVal === 60) {
            secondsEl.text("00");
            minutesEl.text(pad(minutesVal + 1, 2));
            minutesVal++;
        }
        if (minutesVal === 60) {
            minutesEl.text("00");
            hoursEl.text(pad(hoursVal + 1, 2));
        }
    }

    function pad(n, len) {
        s = n.toString();
        if (s.length < len) {
            s = ('0000000000' + s).slice(-len);
        }
        return s;

    }
}