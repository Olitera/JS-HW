const number = document.querySelector('.number');
const form = document.querySelector('.convert-form');
const decNumber = document.querySelector('.dec-number');
const binaryNumber = document.querySelector('.binary-number');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (+number.value) {
    const binaryForm = (+number.value).toString(2);
    decNumber.textContent = number.value;
    binaryNumber.textContent = binaryForm;
  } else {
    alert('Something went wrong. Please enter a valid number.');
  }
}

