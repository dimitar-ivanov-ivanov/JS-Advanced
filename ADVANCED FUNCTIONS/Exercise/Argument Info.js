function getArgumentInfo() {
    let types = {};

    for (let arg of arguments) {
        if (!(typeof arg in types)) {
            types[typeof arg] = 1;
        } else {
            types[typeof arg]++;
        }
        console.log(`${typeof arg}: ${arg}`);
    }

    let keys = [...Object.keys(types)].sort((a, b) => types[b] - types[a]);

    for (let type of keys) {
        console.log(`${type} = ${types[type]}`);
    }
}


getArgumentInfo('cat', 42, function () {
    console.log('Hello world!');
});

getArgumentInfo({name: 'bob'}, 3.333, 9.999);