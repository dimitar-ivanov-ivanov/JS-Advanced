(function (obj) {
    let counter = 0;
    return class Extensible {
        constructor() {
            this.id = counter;
            counter++;
        }
        extend(template) {
            let keys = Object.keys(template);
            for (let key of keys) {
                if (typeof template[key] === "function") {
                    Object.getPrototypeOf(this)[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    };
})();

