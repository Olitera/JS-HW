const TIMER = document.querySelector('.timer-time');
const TIMER_START = document.querySelector('.timer-start');
const TIMER_STOP = document.querySelector('.timer-stop');
const MINUTE_IN_SECONDS = 60;
const SECOND_IN_MILLISECONDS = 1000;
const MAX_TIMER_SECONDS = 3600;

export class Timer {
  timerScreenElement = TIMER;
  timerStartButton = TIMER_START;
  timerStopButton = TIMER_STOP;
  seconds = 0;
  timerInterval = null;
  isTimerRunning = false;

  get timerDisplayedTime() {
    const minutes = Math.floor(this.seconds / MINUTE_IN_SECONDS);
    const seconds = this.seconds % MINUTE_IN_SECONDS;

    return `${ String(minutes).padStart(2, '0') }:${ String(seconds).padStart(2, '0') }`;
  }

  startTimer() {
    this.isTimerRunning = true;
    this.timerInterval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        alert('Time is out');
        this.stopTimer();
      }

      this.updateTimer();
    }, SECOND_IN_MILLISECONDS);
    this.setTimerButtonsStatus();
  }

  stopTimer() {
    this.isTimerRunning = false;
    clearInterval(this.timerInterval);
    this.setTimerButtonsStatus();
  }

  resetTimer() {
    this.stopTimer();
    this.seconds = 0;
    this.updateTimer();
  }

  updateTimer() {
    this.timerScreenElement.textContent = this.timerDisplayedTime;
  }

  addMinute() {
    if (this.seconds < MAX_TIMER_SECONDS) {
      this.seconds += MINUTE_IN_SECONDS;
      this.updateTimer();
      this.setTimerButtonsStatus();
    }
  }

  reduceMinute() {
    if (this.seconds >= MINUTE_IN_SECONDS) {
      this.seconds -= MINUTE_IN_SECONDS;
      this.updateTimer();
      this.setTimerButtonsStatus();
    }
  }

  setTimerButtonsStatus() {
    this.timerStartButton.disabled = this.isTimerRunning || this.seconds <= 0;
    this.timerStopButton.disabled = !this.isTimerRunning;
  }
}
