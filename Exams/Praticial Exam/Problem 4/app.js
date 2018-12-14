function realEstateAgency() {
    let regOffer = $("button[name='regOffer']");
    let fOffer = $("button[name='findOffer']");
    regOffer.on('click', registerOffer);
    fOffer.on('click', findOffer);

    function registerOffer() {
        let rent = $("input[name='apartmentRent']");
        let type = $("input[name='apartmentType']");
        let commission = $("input[name='agencyCommission']");

        let rentVal = +rent.val();
        let commissionVal = +commission.val();
        let typeVal = type.val();

        if (rentVal && commissionVal && rentVal > 0 && commissionVal >= 0 &&
            commissionVal <= 100 && typeVal !== "" && !typeVal.includes(':')) {
            $('#message').text('Your offer was created successfully.');
        } else {
            $('#message').text('Your offer registration went wrong, try again.');
        }

        let div = $('<div class="apartment">');
        div.append($(`<p>Rent: ${rentVal}</p>`));
        div.append($(`<p>Type: ${typeVal}</p>`));
        div.append($(`<p>Commission: ${commissionVal}</p>`));
        $('#building').append(div);

        rent.val('');
        type.val('');
        commission.val('');
    }

    function findOffer() {
        let budget = $("input[name='familyBudget']");
        let typeToLookFor = $("input[name='familyApartmentType']");
        let name = $("input[name='familyName']");

        let budgetVal = +budget.val();
        let typeVal = typeToLookFor.val();
        let nameVal = name.val();

        if (budgetVal && budgetVal > 0 && typeVal !== "" && nameVal !== "") {
            let offers = $('.apartment');
            for (let i = 0; i < offers.length; i++) {
                let children = offers[i].children;

                let rent = +children[0].textContent.substring(6, children[0].textContent.length).trim();
                let typeRegistered = children[1].textContent.substring(6, children[1].textContent.length).trim();
                let commission = +children[2].textContent.substring(12, children[2].textContent.length).trim();

                let totalNeededToLease = rent + rent * commission / 100;
                if (typeVal === typeRegistered && budgetVal >= totalNeededToLease) {
                    let roof = $('#roof h1')[0];
                    let indexBeforeNum = roof.textContent.indexOf(':') + 1;
                    let indexAfterNum = roof.textContent.indexOf('lv.') - 1;
                    let currentAgency = +roof.textContent.substring(indexAfterNum, indexAfterNum);
                    currentAgency += rent;
                    roof.textContent = `Agency profit: ${currentAgency} lv.`;

                    $('#message').text('Enjoy your new home! :))');
                    offers[i].children[0].textContent = nameVal;
                    offers[i].children[1].textContent = 'live here now';
                    offers[i].children[2].remove();

                    let moveOut = $('<button">MoveOut</button>');
                    moveOut.on('click', () => {
                        offers[i].remove();
                        $('#message').text(`They had found cockroaches in ${nameVal}\'s apartment`);
                    });

                    moveOut.appendTo(offers[i]);
                    break;
                }
            }
        }

        budget.val('');
        typeToLookFor.val('');
        name.val('');
    }
}