// #1
function funcOne() {
    const a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}



// #1.1 - run in the console:
// funcOne() // 5
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// TypeError: Assignment to constant variable.

//#2
// let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()

// When funcThree() is called before funcTwo(), it will display an alert with the message "inside the funcThree function 0" because a is initially assigned the value of 0.
// After calling funcTwo(), a will be assigned the value of 5.
// When funcThree() is called again, it will display an alert with the message "inside the funcThree function 5" because a has been updated to 5.

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// If the variable a is declared with const instead of let, it will throw an error because const variables cannot be reassigned.


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
// After executing funcFour(), the value of window.a will be "hello"
// funcFive()
// value a undefined

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// it declares a new local variable a with the value "test" within the function scope.
// with const instead of let ?
// it will still display the same result because the local variable a shadows the outer variable.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// Within the if block, it declares a new local variable a with the value of 5, which only exists within the if block scope.
// Outside of the if block, it displays an alert with the message "outside of the if block 2" using the global variable a.
// with const instead of let ?
// If the variable a is declared with const instead of let, it will throw an error because const variables are block-scoped and cannot be redeclared.



