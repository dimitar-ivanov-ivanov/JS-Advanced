function createReactangle(input) {
    let rectangles = [];

    for (let i = 0; i < input.length; i++) {
        let [w, h] = input[i];
        let rectangle = {
            width: w,
            height: h,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let compareArea = other.area() - this.area();
                return compareArea || (other.width - this.width);
            }
        };

        rectangles.push(rectangle);
    }

    let sorted = rectangles
        .sort((a, b) => a.compareTo(b));

    return sorted;
}

//console.log(createReactangle([[10, 5], [5, 12]]));

console.log(createReactangle([[1, 20], [20, 1], [5, 3], [5, 3]]));
