class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        let possibleRooms = ['livingRoom', 'bedRoom', 'closet'];
        if (!possibleRooms.includes(room)) {
            throw new Error(`Cannot have book shelf in ${room}`);
        }

        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
        this.shelfCondition = shelfCapacity;
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelfCondition === 0) {
            this.shelf.shift();
            this.shelfCondition++;
        }

        this.shelf.push({
            name: bookName,
            author: bookAuthor,
            genre: genre
        });

        this.shelfCondition--;
        this.shelf = [...this.shelf.sort((a, b) => a.author.localeCompare(b.author))];
        return this;
    }

    toString() {
        if (this.shelf.length === 0) {
            return 'It\'s an empty shelf';
        }

        let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
        for (let book of this.shelf) {
            result += `\uD83D\uDCD6 "${book.name}" – ${book.author}\n`;
        }

        return result;
    }

    throwAwayBook(bookName) {
        let givenBook = this.shelf.filter(b => b.name === bookName);
        if (givenBook !== null) {
            let index = this.shelf.indexOf(givenBook);
            this.shelf.splice(index, 1);
        }
    }

    showBooks(genre) {
        let results = [];
        for (let book of this.shelf) {
            if (book.genre === genre) {
                results.push(book);
            }
        }
        let output = `Results for search "${genre}":`;
        for (let book of results) {
            output += (`\n\uD83D\uDCD6 ${book.author} – "${book.name}"`);
        }
        return output;
    }
}

/*let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());

let garden = new BookCollection("Programming", "garden");*/

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));
