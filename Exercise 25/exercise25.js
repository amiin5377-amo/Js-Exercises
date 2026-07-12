const arr1 = [1, 2, 3];
const allarr = [...arr1, 4, 5, 6];
console.log(allarr);


function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}
console.log(multiply(2, 3, 4));