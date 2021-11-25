function guessingGame() {
  this.num = Math.floor(Math.random()*100);
  this.count = 0;
  this.won = false;
  return function(guess) {
    if (this.won) return "The game is over, you already won!";
    if (guess === this.num) {
      this.won = true;
      this.count++;
      return `You win! You found ${this.num} in ${this.count} guesses.`
    };
    if (guess < this.num) {
      this.count++;
      return `${guess} is too low!`
    } else {
      this.count++;
      return `${guess} is too high!`
    };
  }
}

module.exports = { guessingGame };
