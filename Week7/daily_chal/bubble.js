const numbers = [5,0,9,1,7,4,2,6,3,8];

// Using the .toString() method convert the array to a string.
const num_str = numbers.toString()
console.log(num_str)

// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)

const plus_str = numbers.join('+')
console.log(plus_str)

const emp_str = numbers.join(" ")
console.log(emp_str)

const noSpaceStr = numbers.join('')
console.log(noSpaceStr)


for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log('Array: ', numbers);