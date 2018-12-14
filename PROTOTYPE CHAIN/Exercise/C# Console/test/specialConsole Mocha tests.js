let expect = require('chai').expect;
let Console = require('../specialConsole').Console;

describe("class Console static writeLine", function () {
    it("should return the same string for single string argument", function () {
        let string = "One single string";
        expect(Console.writeLine(string)).to.equal(string);
    });
    it("should return JSON if an object is passed for single string argument", function () {
        let obj = {Name: 'Pesho', Age: 5};
        expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj));
    });
    it("should return error if no string format is given for no argument", function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    });
    it("should throw error if first argument is not string", function () {
        expect(() => Console.writeLine(1, "a", "b")).to.throw(TypeError);
    });
    it("should throw error if placeholders are less than arguments", function () {
        expect(() => Console.writeLine("This {0} should {1} replaced.", "one", "be", "three")).to.throw(RangeError);
    });
    it("should throw error if place of placeholders is changed", function () {
        expect(() => Console.writeLine("This {0} should {0} replaced.", "one", "be")).to.throw(RangeError);
    });
    it("should successfully replace placeholders with valid arguments", function () {
        let string = "This {0} should {1} replaced.";
        expect(Console.writeLine(string, "one", "be")).to.equal("This one should be replaced.");
    });
    it("should throw error if invalid placeholder is given", function () {
        let string = "This {0} should {1} replaced. This one {2} not work.";
        expect(() => Console.writeLine(string, "one", "be")).to.throw(RangeError);
    });
    it("should recognize the placeholder numbers well", function () {
        expect(() => Console.writeLine("Not {10}", "valid")).to.throw(RangeError);
    });
});