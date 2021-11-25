function createAccount(pin, amount=0) {
  this.pin = pin;
  this.amount = amount;

  this.checkBalance = function(p) {
    if (p !== this.pin) return "Invalid PIN.";
    return `$${this.amount}`;
  };

  this.deposit = function(p, a) {
    if (p !== this.pin) return "Invalid PIN.";
    if (!a) return "Please enter an amount";
    this.amount += a;
    return `Successfully deposited $${a}. Current balance: $${this.amount}.`;
  }

  this.withdraw = function(p, a) {
    if (p !== this.pin) return "Invalid PIN.";
    if (!a) return "Please enter an amount";
    if (this.amount - a < 0) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
    this.amount -= a;
    return `Successfully withdrew $${a}. Current balance: $${this.amount}.`
  }

  this.changePin = function(p, p2) {
    if (p !== this.pin) return "Invalid PIN.";
    this.pin = p2;
    return "PIN successfully changed!"
  }
}

module.exports = { createAccount };
