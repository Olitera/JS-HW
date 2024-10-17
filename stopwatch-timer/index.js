import { Stopwatch } from './stopwatch.js';

const BODY = document.querySelector('body');

class App extends Stopwatch {
  constructor() {
    super();
    this.addListeners();
  }

  addListeners() {
    BODY.addEventListener('click', (event) => {
      const action = event.target.dataset.action;

      if (action && action in this) {
        this[action]();
      }
    });
  }
}

const APP = new App();
