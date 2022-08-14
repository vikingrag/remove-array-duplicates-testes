// For the require statement, use the name you gave your published package
const removeArrayDuplicates = import('remove-array-duplicates-testes')
let myNums = [1, 2, 3, 1, 4, 1, 2, 5, 3, 4]
let uniqueNums = removeArrayDuplicates(myNums)
console.log(uniqueNums)
