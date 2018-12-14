let commandProcessor = (function () {
    let text = "";
    return {
        append: (newText) => {
            text += newText;
            return this;
        },
        removeStart: (count) => {
            text = text.slice(count);
            return this;
        },
        removeEnd: (count) => {
            text = text.slice(0, text.length - count);
            return this;
        },
        print: () => {
            console.log(text);
            return this;
        },
        execute: function (input) {
            input.forEach((el) => {
                const parts = el.split(" ");
                this[parts[0]].call(this, parts[1]);
            });
        }
    }
})();

let input = (['append hello',
        'append again',
        'removeStart 3',
        'removeEnd 4',
        'print']
);

commandProcessor.execute(input);