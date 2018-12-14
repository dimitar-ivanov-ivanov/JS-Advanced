let expect = require('chai').expect;
let Calculator = require('../Calculator').Calculator;

describe('test holiday package', function () {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator()
    });

    describe('add', function () {
        it('should add expenses of string', function () {
            calculator.add('Pesho');
            expect(calculator.expenses.join('')).to.equal('Pesho');
        });
        it('should add expenses of strings', function () {
            calculator.add('Pesho');
            calculator.add('Ivan');
            expect(calculator.expenses.join(' ')).to.equal('Pesho Ivan');
        });
        it('should add expenses of number', function () {
            calculator.add(1);
            calculator.add(2);
            expect(calculator.expenses.join(' ')).to.equal('1 2');
        });
    });

    describe('toString', function () {
        it('has no expenses', function () {
            expect(calculator.toString()).to.equal('empty array');
        });
        it('has expenses', function () {
            calculator.add('Pesho');
            calculator.add('Gosho');
            expect(calculator.toString()).to.equal('Pesho -> Gosho');
        });
    });

    describe('orderBy', function () {
        it('has no expenses', function () {
            expect(calculator.orderBy()).to.equal('empty');
        });
        it('has expenses all strings', function () {
            calculator.add('Pesho');
            calculator.add('Gosho');
            expect(calculator.orderBy()).to.equal('Gosho, Pesho');
        });
        it('has expenses all numbers', function () {
            calculator.add(1);
            calculator.add(2);
            expect(calculator.orderBy()).to.equal('1, 2');
        });
    });

    describe('divideNums', function () {
        it('throws error when there are no numbers', function () {
            calculator.add('Pesho');
            calculator.add('Gosho');
            expect(() => calculator.divideNums()).to.throw(Error);
        });
        it('returns message when trying to divide by zero', function () {
            calculator.add(1);
            calculator.add(0);
            expect(calculator.divideNums()).to.equal('Cannot divide by zero');
        });
        //Tests for valid
    });
});