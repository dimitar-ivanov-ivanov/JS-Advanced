function validate() {
    $("#company").on("change", showHideCompany);

    let everyFieldIsValid = true;
    let usernameRegex = /^[A-Za-z0-9]{3,20}$/g;
    let passwordRegex = /^\w{5,15}$/g;
    let emailRegex = /@.*\./;
    let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;

    $('#submit').on('click', function (ev) {
            ev.preventDefault();

            if ($('#username').val().match(usernameRegex)) {
                $('#username').css('border', 'none');
            } else {
                $('#username').css('border-color', 'red');
                everyFieldIsValid = false;
            }

            if ($('#email').val().match(emailRegex)) {
                $('#email').css('border', 'none');
            } else {
                $('#email').css('border-color', 'red');
                everyFieldIsValid = false;
            }

            if ($('#confirm-password').val() === $('#password').val()) {
                if ($('#password').val().match(passwordRegex)) {
                    $('#password').css('border', 'none');
                } else {
                    $('#password').css('border-color', 'red');
                    everyFieldIsValid = false;
                }

                if ($('#confirm-password').val().match(passwordRegex)) {
                    $('#confirm-password').css('border', 'none');
                } else {
                    $('#confirm-password').css('border-color', 'red');
                    everyFieldIsValid = false;
                }
            } else {
                $('#password').css('border-color', 'red');
                $('#confirm-password').css('border-color', 'red');
                everyFieldIsValid = false;
            }

            if ($('#company').is(':checked')) {
                if ($('#companyNumber').val().match(companyNumberRegex)) {
                    $('#companyNumber').css('border', 'none');
                } else {
                    $('#companyNumber').css('border-color', 'red');
                    everyFieldIsValid = false;
                }
            }

            if (everyFieldIsValid) {
                $('#valid').css('display', 'block');
            } else {
                $('#valid').css('display', 'none');
            }
        }
    );

    function showHideCompany() {
        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    }
}
