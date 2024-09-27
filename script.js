const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

//Number of characters as default
let noChar = 15;
//Elements
const pwOneEl = document.getElementById('pwOne');
const pwTwoEl = document.getElementById('pwTwo');
const inputEl = document.getElementById('char');

//Functions
function generateRandomIndex() {
  return Math.floor(Math.random() * characters.length);
}

function generatePassword() {
  let passwordOne = '';
  let passwordTwo = '';
  //loop through noChar to set all random characters
  for (let i = 0; i < noChar; i++) {
    passwordOne += characters[generateRandomIndex()];
    passwordTwo += characters[generateRandomIndex()];
  }
  pwOneEl.textContent = passwordOne;
  pwTwoEl.textContent = passwordTwo;
}

//Eventlisteners
inputEl.addEventListener('change', (event) => {
  noChar = event.target.value;
});

//Copy on click
pwOneEl.addEventListener('click', () => {
  navigator.clipboard.writeText(pwOneEl.innerText);
  alert('Copied password ' + pwOneEl.innerText);
});

pwTwoEl.addEventListener('click', () => {
  navigator.clipboard.writeText(pwTwoEl.innerText);
  alert('Copied password ' + pwTwoEl.innerText);
});
