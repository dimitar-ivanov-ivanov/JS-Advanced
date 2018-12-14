function acceptance() {
    let company = $("input[name='shippingCompany']");
    let product = $("input[name='productName']");
    let quantity = $("input[name='productQuantity']");
    let scrape = $("input[name='productScrape']");

    let quantityVal = +quantity.val();
    let scrapeVal = +scrape.val();

    if (company.val() !== "" && product.val() !== "" && quantityVal && scrapeVal && quantityVal > scrapeVal) {
        let div = $('<div>');
        let p = $(`<p>[${company.val()}] ${product.val()} - ${quantityVal - scrapeVal} pieces</p>`);
        let button = $('<button type="button">Out of stock</button>');
        button.on('click',() => div.remove());

        div.append(p);
        div.append(button);
        $('#warehouse').append(div);

        company.val('');
        product.val('');
        quantity.val('');
        scrape.val('');
    }
}