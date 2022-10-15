import './style.css';
import Onion from './food.jpg';

const myImg = new Image();
myImg.src = Onion;

const right = document.getElementsByClassName('right');
console.log(right)
right[0].appendChild(myImg);