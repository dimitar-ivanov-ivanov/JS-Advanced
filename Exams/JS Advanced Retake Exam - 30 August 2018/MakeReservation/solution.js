function makeReservation(container) {
    $('#submit').on('click', submitForm);
    $('#edit').on('click', editForm);
    $('#continue').on('click', addPaymentDetails);
    let fullName = $('#fullName');
    let email = $('#email');
    let phoneNumber = $('#phoneNumber');
    let address = $('#address');
    let postalCode = $('#postalCode');

    function submitForm() {
        if (fullName.val() !== "" && email.val() != "") {
            $('#infoPreview')
                .append(`<li>Name: ${(fullName.val().trim())}</li>`)
                .append(`<li>E-mail: ${(email.val().trim())}</li>`)
                .append(`<li>Phone: ${(phoneNumber.val().trim())}</li>`)
                .append(`<li>Address: ${(address.val().trim())}</li>`)
                .append(`<li>Postal Code: ${(postalCode.val().trim())}</li>`);


            $('#fullName').val('');
            $('#email').val('');
            $('#phoneNumber').val('');
            $('#address').val('');
            $('#postalCode').val('');
            $('#submit').attr('disabled', true);
            $('#edit').attr('disabled', false);
            $('#continue').attr('disabled', false);
        }
    }

    function editForm() {
        let info = $('li');
        $('#fullName').val(info[0].textContent.substring(6));
        $('#email').val(info[1].textContent.substring(7));
        $('#phoneNumber').val(info[2].textContent.substring(9));
        $('#address').val(info[3].textContent.substring(9));
        $('#postalCode').val(info[4].textContent.substring(13));

        $('ul li').remove();
        $('#submit').attr('disabled', false);
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);
    }

    function addPaymentDetails() {
        $(container)
            .append(`<h2>Payment details</h2>`)
            .append($(`<select id="paymentOptions" class="custom-select">`)
                .append(`<option selected disabled hidden>Choose</option>`)
                .append(`<option value="creditCard">Credit Card</option>`)
                .append(`<option value="bankTransfer">Bank Transfer</option>`)
            )
            .append(`<div id="extraDetails"></div>`);

        $('#paymentOptions').on('change', appendExtraDetails);
        $('#submit').attr('disabled', true);
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);
    }

    function appendExtraDetails() {
        let selected = $('#paymentOptions').find(':selected').val();
        $('#extraDetails').empty();

        if (selected === 'creditCard') {
            $('#extraDetails')
                .append($('<div class="inputLabel">Card Number<input/></div><br>'))
                .append($('<div class="inputLabel">Expiration Date<input/></div><br>'))
                .append($('<div class="inputLabel">Security Number<input/></div><br>'));
        } else {
            $('#extraDetails')
                .append($(`<p>"You have 48 hours to transfer the amount to:"<br/>IBAN:</p>`));
        }
        $('#extraDetails')
            .append($('<button id="checkOut">Check Out</button>'));
        $('#checkOut').on('click', function () {
            $('#wrapper').empty();
            $('#wrapper').append($('<h4>Thank you for your reservation</h4>'));
        });
    }
}