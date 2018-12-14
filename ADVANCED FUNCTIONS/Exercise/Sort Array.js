function sortArr(input, sortWay) {
    if (sortWay === 'asc') {
        input = input.sort((a, b) => a - b);
    } else if (sortWay === 'desc') {
        input = input.sort((a, b) => b - a);
    }

    return input;
}

console.log(sortArr([14, 7, 17, 6, 8], 'asc'));;
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));;