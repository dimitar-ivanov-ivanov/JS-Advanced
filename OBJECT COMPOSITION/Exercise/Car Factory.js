function makeCar(input) {
    let car = {
        model: input["model"]
    };

    if (input["power"] <= 90) {
        car["engine"] = {power: 90, volume: 1800};
    } else if (input["power"] <= 120) {
        car["engine"] = {power: 120, volume: 2400};
    } else {
        car["engine"] = {power: 200, volume: 3500};
    }

    if (input["carriage"] === "hatchback") {
        car["carriage"] = {type: 'hatchback', color: input["color"]};
    } else if (input["carriage"] === "coupe") {
        car["carriage"] = {type: 'coupe', color: input["color"]};
    }

    let wheelsize = 2 * Math.round(+input["wheelsize"] / 2) - 1;
    car["wheels"] = [wheelsize, wheelsize, wheelsize, wheelsize];
    return car;
}

console.log(makeCar({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log(makeCar({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));