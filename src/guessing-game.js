class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.currentGuess = null;
    }

    guess() {
        this.currentGuess = Math.ceil((this.min + this.max) / 2);
        return this.currentGuess;
    }

    lower() {
        this.max = this.currentGuess - 1;
    }

    greater() {
        this.min = this.currentGuess + 1;
    }
}

module.exports = GuessingGame;
