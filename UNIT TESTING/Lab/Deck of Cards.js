function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];
        if (!validFaces.includes(face))
            throw new Error("Invalid card face: " + face);
        if (!validSuits.includes(suit))
            throw new Error("Invalid card suit: " + suit);
        let card = {
            face: face,
            suit: suit,
            toString: () => {
                let suitToChar = {
                    'S': "\u2660", // ♠
                    'H': "\u2665", // ♥
                    'D': "\u2666", // ♦
                    'C': "\u2663", // ♣
                };
                return card.face + suitToChar[card.suit];
            }
        };
        return card;
    }

    let result = [];
    for (let i = 0; i < cards.length; i++) {
        let suit = cards[i][cards[i].length - 1];
        let face = cards[i].substring(0, cards[i].length - 1);
        try {
            result.push(makeCard(face, suit));
        } catch (ex) {
            console.log('Invalid card: ' + face + suit);
            return;
        }
    }
    console.log(result.join(" "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
