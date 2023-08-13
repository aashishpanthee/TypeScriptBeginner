function triple(item) {
    // type narrowing using typeof guard
    if (typeof item === 'number') {
        return item * 3;
    }
    return item + item + item;
}
// Truthiness Guards
var checkWord = function (word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char.toUpperCase());
        }
    }
    else {
        console.log("No word provided");
    }
};
checkWord("helo");
