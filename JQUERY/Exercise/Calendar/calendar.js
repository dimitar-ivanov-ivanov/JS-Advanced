function calendar([day, month, year]) {
    let today = new Date(year, month - 1, day);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let caption = months[today.getMonth()] + " " + today.getFullYear();
    $('#content').append($('<table>').append($('<caption>').text(caption)).append($('<tbody>')));

    // by not giving a certain day it sets the day to the last  in the month
    let lastDayInMonth = new Date(year, month, 0);
    let totalDays = lastDayInMonth.getDate();

    let previousMonthDays = (new Date(year, month - 1, 0)).getDate();

    //we are trying to fill to current month with days from the next month
    //we take %7 to fill to month properly
    let nextMonthDays = (7 - (new Date(year, month + 1, 0)).getDate() % 7) % 7;

    totalDays += previousMonthDays + nextMonthDays;

    $('tbody').append($('<tr>')
        .append($('<th>').text("Mon"))
        .append($('<th>').text("Tue"))
        .append($('<th>').text("Wed"))
        .append($('<th>').text("Thu"))
        .append($('<th>').text("Fri"))
        .append($('<th>').text("Sat"))
        .append($('<th>').text("Sun")));

    let daysCounter = 0 - previousMonthDays + 1;

    for (let i = 0; i < totalDays / 7; i++) {
        $('tbody').append($('<tr>'));
        for (let j = 0; j < 7; j++) {
            let currentDay;
            if (daysCounter < 1 || daysCounter > lastDayInMonth.getDate()) {
                currentDay = "";
            } else {
                currentDay = daysCounter;
            }

            if (currentDay == today.getDate()) {
                $('tbody tr:last-child').append($('<td>').addClass('today').text(currentDay));
            } else {
                $('tbody tr:last-child').append($('<td>').text(currentDay));
            }

            daysCounter++;

        }
    }
}