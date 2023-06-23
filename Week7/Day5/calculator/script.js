let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation sign
let finish = false;
// let isPositive = true;
let inputStage = 'a'; // Track the current input stage ('a' or 'b')

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/', '%'];

// screen
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = ''; 
    sign = '';
    finish = false;
    out.textContent = '0';
}

function plusMinus() {
    if (inputStage === 'a' && a !== '') {
        a = -Math.abs(a);
        out.textContent = a;
    } else if (inputStage === 'b' && b !== '') {
        b = -Math.abs(b);
        out.textContent = b;
    }
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.plus-minus').onclick = plusMinus;

document.querySelector('.buttons').onclick = (event) => {
    // not button pressed
    if (!event.target.classList.contains('btn')) return;
    // button ac clearAll pressed
    if (event.target.classList.contains('ac')) return;
    // button +/- pressed
    if (event.target.classList.contains('plus-minus')) return;

    out.textContent = '';
    // retrieve pressed button
    const key = event.target.textContent;

    // if button 0-9 or .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            // console.log(a, b, sign);
            out.textContent = a;
        } 
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else if (key === '.' && (a.includes('.') || b.includes('.'))) {
            return;
        }
        // Check the current input stage
        else if (inputStage === 'a') {
            // Update 'a' value
            a += key;
            out.textContent = a;
        } else if (inputStage === 'b') {
            // Update 'b' value
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }
    

    // if button + - / X %
    if (action.includes(key)) {
        sign = key;
        out.textContent = a;
        inputStage = 'b';
        console.table(a, b, sign);
        return;
    }

    // if button = pressed
    if (key === '=') {
        if (b === '') {
            b = a;
        }
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'x':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case '%':
                a = a / 100 * b;
                break;
        }
        inputStage = 'a';
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}