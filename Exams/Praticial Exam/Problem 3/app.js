class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        let kid = {
            name: name,
            budget: budget
        };

        if (kid.budget < this.budget) {
            return `${kid.name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        let kidString = `${name}-${budget}`;

        if (this.kids[grade] && this.kids[grade].includes(kidString)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        this.kids[grade].push(kidString);

        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade)) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        let kidsFromGrade = this.kids[grade]
            .map(k => {
                let split = k.split('-');
                let name = split[0].trim();
                return name;
            });

        if (!kidsFromGrade.includes(name)) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        let indexOfKid = kidsFromGrade.indexOf(name);
        this.kids[grade].splice(indexOfKid, 1);
        return this.kids[grade];
    }

    toString() {
        //sort in ascending order by their grade
        let sorted = [...Object.keys(this.kids)]
            .sort((a, b) => a - b);

        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        sorted.forEach(g => {
            output += `Grade: ${g}\n`;
            for (let i = 0; i < this.kids[g].length; i++) {
                output += `${i + 1}. ${this.kids[g][i]}\n`;
            }
        });

        output = output.substring(0, output.length - 1);
        return output;
    }

    get numberOfChildren() {
        let totalKids = 0;
        let allGrades = [...Object.keys(this.kids)];
        for (let i = 0; i < allGrades.length; i++) {
            let grade = allGrades[i];
            totalKids += this.kids[grade].length;
        }
        return totalKids;
    }
}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));

vacation.registerChild('Pesho', 6, 2400);
vacation.registerChild('Gosho', 5, 2000);

console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.registerChild('Tanya', 5, 6000))



