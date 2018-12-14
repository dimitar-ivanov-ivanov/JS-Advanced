class SortedList {
    constructor() {
        this.size = 0;
        this.arr = [];
    }

    add(element) {
        this.arr.push(element);
        this.arr.sort((a, b) => a - b);
        this.size++;
        return this.arr;
    };

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.arr.sort((a, b) => a - b);
            this.size--;
            return this.arr;
        }
    };

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    };
}

let sorted = new SortedList();
sorted.add(2);
sorted.add(3);
sorted.remove(0);

console.log(sorted.get(1));