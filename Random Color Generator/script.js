let darkVar = false;

//generate Random Hex color

function genColorFn() {
    const color = getRandomColor();
    disFn(color);

}
function generateRandomCode(length) {
    return Math.floor(Math.random() * length);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[generateRandomCode(16)]
    }
    return color
}

function hexToRgb(hex) {
    const temp = parseInt(hex.substring(1), 16);
    const r = (temp >> 16) & 255;
    const g = (temp >> 8) & 255;
    const b = temp & 255;
    return `RGB(${r}, ${g}, ${b})`;
}

function disFn(col) {
    const colDis = document.getElementById('colorDisplay');
    const hex = document.getElementById('colorHex');
    const rgb = document.getElementById('colorRgb');

    colDis.style.backgroundColor = col;
    hex.textContent = col;
    rgb.textContent = hexToRgb(col);

}
function darkFn() {
    darkVar = !darkVar;
    themeFn();
}

function themeFn() {
    const body = document.body;
    body.style.background = darkVar ? '#333' :
        'linear-gradient(to right, #3494E6, #EC6EAD)';
    body.style.color = darkVar ? '#fff' : '#333';
    const container = document.querySelector('.container');
    container.style.background =
        darkVar ? 'rgba(0, 0, 0, 0.9)' :
            'rgba(255, 255, 255, 0.9)';
}

function cpyFn(element) {
    const copyText = document.getElementById(element);
    navigator.clipboard.writeText(copyText.textContent);
    msgFn('Color code copied to clipboard!');
}

function msgFn(msg) {
    const cpyMsg = document.getElementById('copyMessage');
    cpyMsg.textContent = msg;
    cpyMsg.classList.add('animate__fadeIn');
    setTimeout(() => {
        cpyMsg.textContent = '';
        cpyMsg.classList.remove('animate__fadeIn');
    }, 2000);
} 