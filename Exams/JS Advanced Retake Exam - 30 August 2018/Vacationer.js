class Vacationer {
    constructor(fullName, creditCard) {
        let regex = /^[A-Z][a-z]+\s*[A-Z][a-z]+\s*[A-Z][a-z]+$/g;
        if (fullName.length < 3) {
            throw new Error('Name must include first name, middle name and last name');
        }

        let totalName = fullName[0] + fullName[1] + fullName[2];
        if (!regex.test(totalName)) {
            throw new Error('Invalid full name');
        }

        this.fullName = fullName;
        if (creditCard === undefined) {
            this.creditCard = {
                cardNumber: 1111,
                expirationDate: "",
                securityNumber: 111
            };
        } else {
            this.addCreditCardInfo(creditCard);
        }
        this.wishList = [];
        this.generateIDNumber();
    }

    generateIDNumber() {
        this.idNumber = 231 * this.fullName[0].charCodeAt(0) + 139 * this.fullName[1].length;
        let lastNameLastChar = this.fullName[2][this.fullName[2].length - 1];
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        if (vowels.includes(lastNameLastChar)) {
            this.idNumber += '8';
        } else {
            this.idNumber += '7';
        }
    }

    addCreditCardInfo(input) {
        if (input.length < 3) {
            throw new Error('Missing credit card information');
        }
        let cardNumber = input[0];
        let expirationDate = input[1];
        let securityNumber = input[2];
        if (typeof cardNumber !== 'number' || typeof securityNumber !== 'number') {
            throw new Error('Invalid credit card details');
        }

        this.creditCard = {
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            securityNumber: securityNumber
        };
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }

        this.wishList.push(destination);
        this.wishList = [...this.wishList.sort((a, b) => a.length - b.length)];
    }

    getVacationerInfo() {
        let result = `Name: ${this.fullName[0]} ${this.fullName[1]} ${this.fullName[2]}\n` +
            `ID Number: ${this.idNumber}\nWishlist:\n`;

        if (this.wishList.length === 0) {
            result += 'empty\n';
        } else {
            result += this.wishList.join(', ') + '\n';
        }
        result += 'Credit Card:\n' +
            `Card Number: ${this.creditCard.cardNumber}\n` +
            `Expiration Date: ${this.creditCard.expirationDate}\n` +
            `Security Number: ${this.creditCard.securityNumber}`;

        return result;
    }
}

let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);
vacationer2.addDestinationToWishList('Paris');
vacationer2.addDestinationToWishList('Paris');