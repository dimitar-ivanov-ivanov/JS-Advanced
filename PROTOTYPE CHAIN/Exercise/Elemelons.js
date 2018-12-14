function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target == Melon) {
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return 'Element: Water\n' + super.toString();
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return 'Element: Fire\n' + super.toString();
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return 'Element: Earth\n' + super.toString();
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return 'Element: Air\n' + super.toString();
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
            this.currentElementIndex = 3;
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        }

        morph() {
            this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
            this.element = this.elements[this.currentElementIndex];
        }


        toString() {
            return `Element: ${this.element}\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}


//let test = new Melon(100, "Test");
//Throws error

/*let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

let firemelon = new Firemelon(12.5, "Big");
console.log(firemelon.toString());

let earthmelon = new Earthmelon(12.5, "Huge");
console.log(earthmelon.toString());

let airmelon = new Airmelon(12.5, "Great");
console.log(airmelon.toString());*/

/*
let melonMelon = new Melolemonmelon(12.5, 'Vast');
console.log(melonMelon.element);
melonMelon.morph();
console.log(melonMelon.element);
melonMelon.morph();
console.log(melonMelon.element);
melonMelon.morph();
console.log(melonMelon.element);
melonMelon.morph();
console.log(melonMelon.element);*/
