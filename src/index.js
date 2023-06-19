console.log('hi');
const page = document.getElementById('content')

const test = () => {
    const tester = document.createElement('div')
    tester.innerText = 'test'
    return tester;
}

page.appendChild(test());