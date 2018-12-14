function extractText() {
    const content = $('li')
        .toArray()
        .map((elem) => elem.textContent)
        .join(", ");

    $('#result').text(content);
}