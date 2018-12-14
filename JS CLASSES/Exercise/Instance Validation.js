class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        if (typeof clientId !== 'string' || clientId.length != 6 ||
            Number.parseInt(clientId) === NaN) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        let emailRegex = /^[a-zA-Z0-9]{1,}@[A-Za-z.]+$/g;
        if (!emailRegex.test(email)) {
            throw new TypeError('Invalid e-mail');
        }
        let namesRegex = /[a-zA-Z]{3,20}/g;
        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if (!namesRegex.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }
        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        [this.clientId, this.email, this.firstName, this.lastName] = [clientId, email, firstName, lastName];
        this.products = [];
    }
}

//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov');