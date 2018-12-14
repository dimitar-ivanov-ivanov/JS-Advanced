let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let isOddOrEven = require('../Even Or Odd').isOddOrEven;

const notCorrectResultMessage = 'Function did not return the correct result';

describe('isOddOrEven', function () {
    it('with a number parameter, should return undefined', function () {
        expect(isOddOrEven(13)).to.equal(undefined, notCorrectResultMessage);
    });
    it('with a object parameter, should return undefined', function () {
        isOddOrEven({name: 'pesho'}).should.equal(undefined, notCorrectResultMessage);
    });
    it('with an even length string should return "even"', function () {
        assert.equal(isOddOrEven("roar"), "even", notCorrectResultMessage);
    });
    it('with an odd length string, should return "odd"', function () {
        expect(isOddOrEven("pesho")).to.equal("odd", notCorrectResultMessage);
    });
    it('with multiple consecutive checks, should return correct values', function () {
        expect(isOddOrEven("cat")).to.equal('odd', notCorrectResultMessage);
        expect(isOddOrEven("alabala")).to.equal("odd", notCorrectResultMessage);
        expect(isOddOrEven("is it even")).to.equal("even", notCorrectResultMessage);
    });
});