function search() {
    const searchTerm = $('#searchText').val().toLowerCase();
    const count = $('#towns li')
        .css("font-weight", "")
        .filter(function (index, elem) {
            return elem.textContent.toLowerCase().indexOf(searchTerm) > -1;
        })
        .css("font-weight", "bold")
        .length;

    $("#result").text(count + ' matches found.');
}
