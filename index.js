let container = document.querySelector('.container');
let colorButtons = document.querySelectorAll('.color-choice');

let clearButton = document.querySelector('.clear');
var slider = document.querySelector('#sizeRange');



document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.grid');

  // Create a 16x16 grid
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      container.appendChild(cell);
    }
  }
});



function changeColor(){
let black = document.getElementsByTagName('Black');
let rainbow = document.getElementsByTagName('Rainbow');
let eraser = document.getElementsByTagName('Eraser');
}