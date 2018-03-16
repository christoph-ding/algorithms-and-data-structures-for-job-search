function isPermutation(one, two) {
  if (one.length !== two.length) {
    return false
  }
  let oneSorted = one.split('').sort().join('')
  let twoSorted = two.split('').sort().join('')

  return oneSorted === twoSorted
}

// test
console.log(isPermutation('cat', 'tac')) // true
console.log(isPermutation('cat', 'tacd')) // false
console.log(isPermutation('cat', 'dac')) // false
