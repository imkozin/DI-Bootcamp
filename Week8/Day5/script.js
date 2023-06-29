function isAnagram(str1, str2) {
    const newStr1 = str1.toLowerCase().replace(/\s+/g,'')
    const newStr2 = str2.toLowerCase().replace(/\s+/g,'')
    if (newStr1.length !== newStr2.length) {
        return false;
    }

    const sortedStr1 = newStr1.split('').sort().join('')
    const sortedStr2 = newStr2.split('').sort().join('')

    return sortedStr1 === sortedStr2
}

// function isAnagram(str1, str2) {
//     let newStr1 = str1.toLowerCase().replace(/\s+/g,'').split('').sort();
//     let newStr2 = str2.toLowerCase().replace(/\+s/g,'').split('').sort();

//     if (newStr1.length !== newStr2.length) {
//         return false;
//     }

//     for (let i = 0; i < newStr1.length; i++) {
//         if (newStr1[i] !== newStr2[i]) {
//             return false
//         }
//     } return true
// }
console.log(isAnagram('Listen', 'Silent'));
console.log(isAnagram('triangle', 'Integral'));
console.log(isAnagram('Astronomer', 'Moon starer'));
console.log(isAnagram('School master', 'The classroom'));
console.log(isAnagram('The Morse Code', 'Here come dots'));



