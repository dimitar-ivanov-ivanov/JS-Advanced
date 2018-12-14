function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

let expect = require('chai').expect;

describe("createCalculator()", function () {
    let calc;
    let value;

    beforeEach(function () {
       calc = createCalculator();
    });

    describe("Nominal cases(valid input)", function () {
        it("should return 0 for get;", function () {
            value = calc.get();
            expect(value).to.be.equal(0);
        });
        it("should return 5 after add(2); add(3)", function () {
            calc.add(2);
            calc.add(3);
            value = calc.get();
            expect(value).to.be.equal(5);
        });
        it("should return -5 after add(-2); add(-3)", function () {
            calc.add(-2);
            calc.add(-3);
            value = calc.get();
            expect(value).to.be.equal(-5);
        });
        it("should return 5 after add(7); substract(2)", function () {
            calc.add(7);
            calc.subtract(2);
            value = calc.get();
            expect(value).to.be.equal(5);
        });
        it("should return 4.2 after add(5.3); subtract(1.1);", function () {
            calc.add(5.3);
            calc.subtract(1.1);
            value = calc.get();
            expect(value).to.be.equal(5.3 - 1.1);
        });
        it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
            calc.add(10);
            calc.subtract('7');
            calc.add('-2');
            calc.subtract(-1);
            let value = calc.get();
            expect(value).to.be.equal(2);
        });
        it("should return NaN for substract(string)",function () {
            calc.subtract('hello');
            value = calc.get();
            expect(value).to.be.NaN;
        })
    });
});