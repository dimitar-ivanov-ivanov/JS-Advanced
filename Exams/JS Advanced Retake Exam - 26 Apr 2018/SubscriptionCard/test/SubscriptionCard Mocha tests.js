let expect = require('chai').expect;
let SubscriptionCard = require('../SubscriptionCard').SubscriptionCard;

describe('SubscriptionCard', function () {
    let card;
    beforeEach(() => {
        card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
    });

    describe('firstName', function () {
        it('should be same as passed', function () {
            expect(card.firstName).to.equal('Pesho');
        });
    });
    describe('lastName', function () {
        it('should be same as passed', function () {
            expect(card.lastName).to.equal('Petrov');
        });
    });
    describe('SSN', function () {
        it('should be same as passed', function () {
            expect(card.SSN).to.equal('00000000');
        });
    });
    describe('isBlocked', function () {
        it('should be same as passed', function () {
            expect(card.isBlocked).to.equal(false);
        });
    });
    describe('block', function () {
        it('should be blocked', function () {
            card.block();
            expect(card.isBlocked).to.equal(true);
        });
    });
    describe('unblock', function () {
        it('should be unblocked', function () {
            card.unblock();
            expect(card.isBlocked).to.equal(false);
        });
    });

    describe('addSubscription', function () {
        it('should add new subscription', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card._subscriptions.length).to.equal(1);
        });
        it('should add tow new subscriptions', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card._subscriptions.length).to.equal(2);
        });
    });

    describe('isValid', function () {
        it('should return false if blocked', function () {
            card.block();
            expect(card.isValid('120', new Date('2018-04-22'))).to.equal(false);
        });
        it('should return true if not blocked and passing proper params', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.equal(true);
        });
        it('should return false if not blocked and no addition', function () {
            expect(card.isValid('120', new Date('2018-04-22'))).to.equal(false);
        });
        it('should return false if not blocked and passing *', function () {
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card.isValid('*', new Date('2018-05-25'))).to.equal(true);
        });
        it('should return false if not startDate after validation startDate', function () {
            card.addSubscription('*', new Date('2019-05-25'), new Date('2018-06-24'));
            expect(card.isValid('*', new Date('2018-05-25'))).to.equal(false);
        });
        it('should return false if not end before validation date', function () {
            card.addSubscription('*', new Date('2018-05-25'), new Date('2017-06-24'));
            expect(card.isValid('*', new Date('2018-05-25'))).to.equal(false);
        });
    });
});