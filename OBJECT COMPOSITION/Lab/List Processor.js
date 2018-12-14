function solution(input) {
    let processor = (function () {
        let arr = [];
        return {
            add: (input) => {
                arr.push(input);
            },
            remove: (input) => {
                let indexOf = arr.indexOf(input);
                while (indexOf !== -1) {
                    arr.splice(indexOf, 1);
                    indexOf = arr.indexOf(input);
                }
            },
            print: (input) => {
                console.log(arr.join(","));
            }
        };
    })();

    for (let i = 0; i < input.length; i++) {
        let [command, val] = input[i].split(' ');
        processor[command](val);
    }
}

//solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);


