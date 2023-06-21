import './style.css'

const page = document.getElementById('content')

const test = (a) =>{
    const tester = document.createElement('div')
    tester.classList.add('message')
    tester.innerText = a;
    return tester
}

page.appendChild(test('Hey now!'))