let solution = (function getSolution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            flavour: 3,
            fat: 7
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    function restock([ingredient, quantity]) {
        quantity = +quantity;
        ingredients[ingredient] += quantity;
        return "Success";
    }

    function report() {
        return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`;
    }

    function prepare([meal, mealQuantity]) {
        mealQuantity = +mealQuantity;

        let neededIngredients = meals[meal.toLowerCase()];

        //check all ingredients if all are sufficient  then remove them
        for (let key of Object.keys(neededIngredients)) {
            let ingredientQuantity = neededIngredients[key] * mealQuantity;
            if(ingredients[key] < ingredientQuantity){
                return `Error: not enough ${key} in stock`;
            }
        }

        for (let key of Object.keys(neededIngredients)) {
            let ingredientQuantity = neededIngredients[key] * mealQuantity;
            ingredients[key] -= ingredientQuantity;
        }

        return "Success";
    }

    let result = function (command) {
        let tokens = command.split(' ');
        let action = tokens.shift();
        switch (action) {
            case "prepare":
                return prepare(tokens);
                break;
            case "restock":
                return restock(tokens);
                break;
            case "report":
                return report();
        }
    };

    return result;
})();


/* First test
console.log(solution("restock carbohydrate 10"));
console.log(solution("report"));
console.log(solution("restock flavour 10"));
console.log(solution("prepare apple 1"));
console.log(solution("restock fat 10"));
console.log(solution("prepare burger 1"));
console.log(solution("report"));*/

/*console.log(solution("restock flavour 50"));
console.log(solution("prepare coke 4"));*/

console.log(solution("prepare cheverme 1"));
console.log(solution("restock protein 10"));
console.log(solution("prepare cheverme 1"));
console.log(solution("restock carbohydrate 10"));
console.log(solution("prepare cheverme 1"));
console.log(solution("restock fat 10"));
console.log(solution("prepare cheverme 1"));
console.log(solution("restock flavour 10"));
console.log(solution("prepare cheverme 1"));
console.log(solution("report"));