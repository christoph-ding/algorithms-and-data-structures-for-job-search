function isUniqueExtraSpace(input) {
  let space = {}

  return input.split('').every((char) => {
    if (space.hasOwnProperty(char)) {
      return false
    } else {
      space[char] = true
      return true
    }
  })
}


// tests
console.log(isUniqueExtraSpace('abc')) // true
console.log(isUniqueExtraSpace('abcc')) // false

function isUniqueNoSpace(input) {
  let sortedInput = input.split('').sort()

  return sortedInput.every((char, index) =>{
    let nextChar = sortedInput[index + 1]
    return char !== nextChar
  })
}

// tests
// console.log(isUniqueNoSpace('zeogkxabc')) // true
// console.log(isUniqueNoSpace('zeogkxabac')) // false
