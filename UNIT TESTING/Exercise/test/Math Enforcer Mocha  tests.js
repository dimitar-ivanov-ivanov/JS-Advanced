let expect = require('chai').expect;
let mathEnforcer = require('../Math Enforcer').mathEnforcer;

const notCorrectResultMessage = 'Function did not return the correct result';

describe('mathEnforcer', function () {
    describe('addFive', function () {
        let addFive = mathEnforcer.addFive;
        it('with a non number parameter, should return undefined', function () {
            expect(addFive("a")).to.be.equal(undefined, notCorrectResultMessage);
        });
        it('with a negative number -5 parameter, should return 0', function () {
            expect(addFive(-5)).to.be.equal(0, notCorrectResultMessage);
        });
        it('with a floating number 1.2 parameter, should return 6.2', function () {
            expect(addFive(1.2)).to.be.closeTo(6.2, 0.01, notCorrectResultMessage);
        });
        it('with a positive number 5 parameter, should return 10', function () {
            expect(addFive(5)).to.be.equal(10, notCorrectResultMessage);
        });
    });
    describe('subtractTen', function () {
        let subtractTen = mathEnforcer.subtractTen;
        it('with a non number parameter, should return undefined', function () {
            expect(subtractTen("a")).to.be.equal(undefined, notCorrectResultMessage);
        });
        it('with a negative number -1 parameter, should return -11', function () {
            expect(subtractTen(-1)).to.be.equal(-11, notCorrectResultMessage);
        });
        it('with a positive number 10 parameter, should return 0', function () {
            expect(subtractTen(10)).to.be.equal(0, notCorrectResultMessage);
        });
        it('with a floating number 1.2 parameter, should return -8.8', function () {
            expect(subtractTen(1.2)).to.be.closeTo(-8.8, 0.01, notCorrectResultMessage);
        });
    });
    describe('sum', function () {
        let sum = mathEnforcer.sum;
        it('with a non number first parameter, should return undefined', function () {
            expect(sum("a", 1)).to.be.equal(undefined, notCorrectResultMessage);
        });
        it('with a non number second parameter, should return undefined', function () {
            expect(sum(1, "a")).to.be.equal(undefined, notCorrectResultMessage);
        });
        it('with a non number first and second parameter, should return undefined', function () {
            expect(sum("a", "a")).to.be.equal(undefined, notCorrectResultMessage);
        });
        it('with a negative number first parameter -2 and negative number second parameter -5, should return -7', function () {
            expect(sum(-2, -5)).to.be.equal(-7, notCorrectResultMessage);
        });
        it('with a positive number first parameter 2 and positive number second parameter 5, should return 7', function () {
            expect(sum(2, 5)).to.be.equal(7, notCorrectResultMessage);
        });
        it('with a positive number first parameter 2 and negative number second parameter -2, should return 0', function () {
            expect(sum(2, -2)).to.be.equal(0, notCorrectResultMessage);
        });
        it('with a floating point number first parameter 2.5 and floating point number second parameter 5.2, should return 7.7', function () {
            expect(sum(2.5, 5.2)).to.be.closeTo(7.7, 0.01, notCorrectResultMessage);
        });
    });
});
