const GIVEN_TIME = 5000;
const ONE_SEC_IN_MILLISECOND = 1000;

const textareaElement = document.getElementById('typing-area');
const timerElement = document.getElementById('timer');

timerElement.innerHTML = milliToSeconds(GIVEN_TIME);

function milliToSeconds(milliseconds) {
  return milliseconds / 1000;
}

function clearTextArea(element) {
  element.value = '';
}

function startTimer() {
  let timeRemaining = GIVEN_TIME;
  let timer = setInterval(() => {
    timeRemaining -= ONE_SEC_IN_MILLISECOND;
    timerElement.innerHTML = milliToSeconds(timeRemaining);
    if (!timeRemaining) {
      console.log('q34');
      clearTextArea(textareaElement);
      clearInterval(timer);
    }
  }, ONE_SEC_IN_MILLISECOND);
  return timer;
}

textareaElement.addEventListener('keydown', () => {
  if (typeof timerId !== 'undefined') {
    clearInterval(timerId);
  }
  timerId = startTimer();
  timerElement.innerHTML = milliToSeconds(GIVEN_TIME);
});

document.getElementById('button').addEventListener('click', () => {
  clearTextArea(textareaElement);
});
