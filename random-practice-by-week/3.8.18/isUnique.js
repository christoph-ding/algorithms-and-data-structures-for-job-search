function isUniqueExtraSpace(input) {
  let space = {}
  let answer = true

  input.split('').forEach((char) => {
    if (space.hasOwnProperty(char)) {
      answer = false
    } else {
      space[char] = true
    }
  })
  return answer
}

// tests
console.log(isUniqueExtraSpace('abc')) // true
console.log(isUniqueExtraSpace('abcc')) // false
