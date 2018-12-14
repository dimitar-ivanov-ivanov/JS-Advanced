function addDestination() {
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    let city = $('.inputData')[0];
    let country = $('.inputData')[1];
    let season = $('#seasons').val();

    if (city.value !== '' && country.value !== '') {
        let row = $('<tr>')
            .append($('<td>').text(`${city.value}, ${country.value}`))
            .append($('<td>').text(season.capitalize()));

        $('#destinationsList').append(row);
        city.value = "";
        country.value = "";
        let currentCounter = +$(`#${season}`).val();
        $(`#${season}`).val(currentCounter + 1);
    }
}