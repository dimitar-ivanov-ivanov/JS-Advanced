let expect = require('chai').expect;
let lookupChar = require('../Char Lookup').lookupChar;

const notCorrectResultMessage = 'Function did not return the correct result';

describe('isOddOrEven', function () {
    it('with a first parameter not string', function () {
        expect(lookupChar(13, 1)).to.equal(undefined, notCorrectResultMessage);
    });
    it('with a second parameter not number', function () {
        expect(lookupChar("a", "b")).to.equal(undefined, notCorrectResultMessage);
    });
    it('with a first parameter not string and second parameter not number', function () {
        expect(lookupChar(1, "b")).to.equal(undefined, notCorrectResultMessage);
    });
    it('with a negative second parameter', function () {
        expect(lookupChar("a", -1)).to.equal("Incorrect index", notCorrectResultMessage);
    });
    it('with a floating point second parameter', function () {
        expect(lookupChar("a", 1.3)).to.equal(undefined, notCorrectResultMessage);
    });
    it('with a second parameter equal than the string\'s length', function () {
        expect(lookupChar("a", 1)).to.equal("Incorrect index", notCorrectResultMessage);
    });
    it('with a second parameter larger than the string\'s length', function () {
        expect(lookupChar("a", 2)).to.equal("Incorrect index", notCorrectResultMessage);
    });
    it('should return correct result hello 2', function () {
        expect(lookupChar("hello",2)).to.equal("l", notCorrectResultMessage);
    });
    it('should return correct result hello 4', function () {
        expect(lookupChar("hello",4)).to.equal("o", notCorrectResultMessage);
    });
});