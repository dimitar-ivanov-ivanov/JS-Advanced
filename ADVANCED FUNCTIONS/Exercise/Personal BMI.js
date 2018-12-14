function getBMI(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / (height * height / 10000)),
    };

    person.status = person.BMI < 18.5 ? "underweight" : person.BMI < 25 ? "normal" : person.BMI < 30 ? "overweight" : "obese";

    if (person.status === "obese") {
        person.recommendation = "admission required";
    }

    return person;
}

let person = getBMI(`Peter`, 29, 75, 182);
console.log(person);