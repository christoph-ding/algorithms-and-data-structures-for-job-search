function countAndSay(n) {
  let previous = [1]
  let currentCountAndSay = []
  let round = 2

  // helper variables for forming 'currentCountAndSay' from 'previous'
  let currentSought,
      runSize

  while (round <= n) {
    // update currentCountAndSay
    currentSought = previous[0]
    runSize = 0

    console.log('round: ', round, ' previous: ', previous, ' sought: ', currentSought)

    previous.forEach((currentChar, index) => {
      if (currentChar !== currentSought) {
        console.log('mismatch at index: ', index, ' currentChar: ', currentChar, ' sought: ', currentSought)
        currentCountAndSay.push(runSize)
        currentCountAndSay.push(currentSought)
        runSize = 1
      } else {
        runSize++
        if (index === previous.length - 1) {
          console.log()
           currentCountAndSay.push(runSize)
           currentCountAndSay.push(currentSought)
        }
      }
    })

    previous = currentCountAndSay
    currentCountAndSay = []
    round++
  }

  return previous
}

// tests
// console.log(countAndSay(1)) // [1]
// console.log(countAndSay(2)) // [1, 1]
// console.log(countAndSay(3)) // [2, 1]
console.log(countAndSay(4)) // [1, 2, 1, 1]
