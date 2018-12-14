function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

let expect = require('chai').expect;

describe("sum(arr) - sum array of numbers", function () {
    it("should return false if input isn't array", function () {
        expect(isSymmetric("a")).to.be.equal(false);
    });
    it("should return true for [2,1,2]", function () {
        expect(isSymmetric([2, 1, 2])).to.be.equal(true);
    });
    it("should return true for [2,2]", function () {
        expect(isSymmetric([2, 2])).to.be.equal(true);
    });
    it("should return true for []", function () {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it("should return true for [1]", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it("should return false for [1,2]", function () {
        expect(isSymmetric([1, 2])).to.be.equal(false);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
    it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.equal(false);
    });
});


