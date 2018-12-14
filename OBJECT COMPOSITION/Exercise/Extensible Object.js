function extendObject(obj) {
    let myObj = {
        extend: function (template) {
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

    return myObj;
}