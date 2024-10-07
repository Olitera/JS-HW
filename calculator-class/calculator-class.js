class Calculator {

  constructor(firstNumber, secondNumber) {
    this.#checkIsNumberValid(firstNumber);
    this.#checkIsNumberValid(secondNumber);

    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  setX(number) {
    this.#checkIsNumberValid(number);
    this.firstNumber = number;
  }

  setY(number) {
    this.#checkIsNumberValid(number);
    this.secondNumber = number;
  }

  logSum = () => this.firstNumber + this.secondNumber;

  logMul = () => this.firstNumber * this.secondNumber;

  logSub = () => this.firstNumber - this.secondNumber;

  logDiv = () => {
    if (this.secondNumber === 0) {
      throw new Error('Cannot divide by zero');
    }

    return this.firstNumber / this.secondNumber;
  }

  #checkIsNumberValid(number) {
    if(typeof number !== 'number' || !isFinite(number)) {
      throw new Error('Invalid argument');
    }
  }
}
