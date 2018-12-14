class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat.constructor.name === 'Rat') {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = this.name;
        if (this.unitedRats.length > 0) {
            result += '\n';
            for (let rat of this.unitedRats) {
                result += '##' + rat.name + '\n';
            }
        }
        return result;
    }
}

let test = new Rat("Pesho");

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());

console.log(test.toString());