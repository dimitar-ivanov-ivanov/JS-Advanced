function solve(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            [this.destination, this.price, this.status] = [destination, price, status];
        }

        compareTo(other, criteria) {
            if (criteria === 'destination') {
                return this.destination.localeCompare(other.destination);
            } else if (criteria === 'price') {
                if (this.price > other.price) {
                    return 1;
                } else if (this.price < other.price) {
                    return -1;
                }
                return 0;
            } else if (criteria === 'status') {
                return this.status.localeCompare(other.status);
            }
        }
    }

    let result = [];

    for (let i = 0; i < input.length; i++) {
        [destination, priceStr, status] = input[i].split('|');
        let price = +priceStr;
        let ticket = new Ticket(destination, price, status);
        result.push(ticket);
    }

    result = result.sort((a, b) => a.compareTo(b, criteria));
    return result;
}


console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));



console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));