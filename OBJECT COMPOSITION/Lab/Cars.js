function solution(input) {
    let carProcessor = (function process() {
        let cars = {};
        return {
            create: ([name, middle, parent]) => {
                parent = cars.hasOwnProperty(parent) ? cars[parent] : null;
                let newObj = Object.create(parent);
                cars[name] = newObj;
                return newObj;
            },
            set: ([name, key, value]) => {
                let obj = cars[name];
                obj[key] = value;
            },
            print: ([name]) => {
                let obj = cars[name];
                let allProperties = [];
                Object.keys(obj).forEach(key => allProperties.push(`${key}:${obj[key]}`));
                while (Object.getPrototypeOf(obj)) {
                    Object.keys(Object.getPrototypeOf(obj)).forEach(key => allProperties.push(`${key}:${Object.getPrototypeOf(obj)[key]}`));
                    obj = Object.getPrototypeOf(obj);
                }
                console.log(allProperties.join(', '));
            }
        };
    })();

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let action = tokens.shift();
        carProcessor[action](tokens);
    }
}

solution(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);