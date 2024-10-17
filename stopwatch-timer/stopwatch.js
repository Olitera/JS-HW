import { Timer } from './timer.js';

const STOPWATCH = document.querySelector('.stopwatch-time');
const STOPWATCH_START = document.querySelector('.stopwatch-start');
const STOPWATCH_STOP = document.querySelector('.stopwatch-stop');
const MINUTE_IN_CENTISECONDS = 6000;
const CENTISECOND_IN_MILLISECONDS = 10;

export class Stopwatch extends Timer {
  stopwatchScreenElement = STOPWATCH;
  startStopwatchButton = STOPWATCH_START;
  stopStopwatchButton = STOPWATCH_STOP;
  stopwatchCentiseconds = 0;
  stopwatchInterval = null;
  isStopwatchRunning = false;

  get stopwatchDisplayedTime() {
    const minutes = Math.floor(this.stopwatchCentiseconds / MINUTE_IN_CENTISECONDS);
    const seconds = Math.floor((this.stopwatchCentiseconds % MINUTE_IN_CENTISECONDS) / 100);
    const centiseconds = this.stopwatchCentiseconds % 100;
    const formattedCentiseconds = String(centiseconds).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${ formattedMinutes }:${ formattedSeconds }:${ formattedCentiseconds }`;
  }

  startStopwatch() {
    this.isStopwatchRunning = true;
    this.stopwatchInterval = setInterval(() => {
      this.stopwatchCentiseconds++;
      this.updateStopwatch();
    }, CENTISECOND_IN_MILLISECONDS);
    this.setStopwatchButtonsStatus();
  }

  stopStopwatch() {
    this.isStopwatchRunning = false;
    clearInterval(this.stopwatchInterval);
    this.setStopwatchButtonsStatus();
  }

  resetStopwatch() {
    this.stopStopwatch();
    this.stopwatchCentiseconds = 0;
    this.updateStopwatch();
  }

  updateStopwatch() {
    this.stopwatchScreenElement.innerText = this.stopwatchDisplayedTime;
  }

  setStopwatchButtonsStatus() {
    this.startStopwatchButton.disabled = this.isStopwatchRunning;
    this.stopStopwatchButton.disabled = !this.isStopwatchRunning;
  }
}

