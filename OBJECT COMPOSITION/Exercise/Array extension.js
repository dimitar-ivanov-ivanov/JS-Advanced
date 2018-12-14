(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.reverse().slice(this.length - n).reverse();
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };
    Array.prototype.average = function () {
        let sum = this.sum();
        return sum / this.length;
    };
})();

let a = [1, 2, 3, 4, 5];
console.log(a.last());
console.log(a.skip(2));
console.log(a.take(2));
console.log(a.sum());
console.log(a.average());