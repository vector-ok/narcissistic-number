
// window.addEventListener('DOMContentLoaded', () => {}

let numPowered = [];
let sum;

// variables for styling result
let isValid = document.getElementById('isValid');
let notValid = document.getElementById('notValid');
isValid.style.display = "none";
notValid.style.display = "block";
notValid.innerHTML = "testing Narcissistic tendency...";


const calc = () => {
  let yourNum = document.getElementById('yourNum');
  let inputValue = document.getElementById('inputValue');
  let input = document.getElementById('input').value;
  const numLength = input.length;

  yourNum.innerHTML = "You entered";
  inputValue.innerHTML = input;

  // isolate numbers, perform maths, get Nazi..

  for (let i = 0; i < input.length; i++) {
    numPowered[i] = Math.pow(input[i], numLength);
    sum += numPowered[i];

    }

    // logging sum to console to see if everything is in order

    console.log(sum);

    // display message depending on result

    if(input == ""){
      yourNum.innerHTML = "Please enter a number";
    }

    else if(input == sum){
      notValid.style.display = "none";
      isValid.style.display = "block";
      isValid.innerHTML = "CONFIRMED! \ Your number is full blown Narcissistic";
    }
    else{
      notValid.style.display = "block";
      isValid.style.display = "none";
      notValid.innerHTML = "Sorry, your number isn't Narcissistic";
    }

    // resetting sum so it doesn't run crazy

    sum = 0;
}
