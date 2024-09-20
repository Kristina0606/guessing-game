/** @format */

class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.currentNum = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.currentNum = Math.ceil((this.min + this.max) / 2);
    console.log(this.currentNum);
    return this.currentNum;
  }

  lower() {
    this.max = this.currentNum;

    console.log(this.max);
  }

  greater() {
    this.min = this.currentNum;

    console.log(this.min);
  }
}
module.exports = GuessingGame;
