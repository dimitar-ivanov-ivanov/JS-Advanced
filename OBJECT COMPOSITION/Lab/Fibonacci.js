function getFibonator() {
    let a = 0;
    let b = 1;

    return function () {
        let oldA = a;
        let oldB = b;
        a = oldB;
        b = oldA + oldB;
        return oldB;
    };
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());