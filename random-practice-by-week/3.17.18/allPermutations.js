function allPermutations(chars) {
  let permutations = []
  let currentPerm = []

  function inner(subChars) {
    if (subChars.length) {
      subChars.forEach((elem, index) => {
        currentPerm.push(elem)
        let subSlice = subChars.slice(0, index).concat(subChars.slice(index + 1))
        inner(subSlice)
        currentPerm.pop()
      })
    } else {
      // 'done'
      permutations.push(currentPerm.slice())
    }
  }
  
  inner(chars)

  return permutations
} 

// test
let test = ['a', 'b', 'c']
console.log(allPermutations(test))
