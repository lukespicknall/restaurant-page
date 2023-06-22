import './style.css';
import Heart from './images/heart-outline.svg';

let page = document.getElementById('content');

const test = (a) =>{
    const tester = document.createElement('div')
    tester.classList.add('message')
    tester.innerText = a;

    const myHeart = new Image();
    myHeart.src = Heart;
    tester.appendChild(myHeart);
    return tester;
};

page.appendChild(test('Hey now!'));

let me = 'you';

console.log(me)
