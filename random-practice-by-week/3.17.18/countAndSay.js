function countAndSay(n) {
  let previous = [1]
  let currentCountAndSay = []
  let round = 2

  // helper variables for forming 'currentCountAndSay' from 'previous'
  let currentSought,
      runSize

  while (round++ <= n) {
    // update currentCountAndSay
    currentSought = previous[0]
    runSize = 0

    previous.forEach((currentChar, index) => {
      if (currentChar !== currentSought) {
        currentCountAndSay.push(runSize)
        currentCountAndSay.push(currentSought)
        runSize = 1
      } else {
        runSize++
        if (index === previous.length - 1) {
           currentCountAndSay.push(runSize)
           currentCountAndSay.push(currentSought)
        }
      }
    })

    previous = currentCountAndSay
    currentCountAndSay = []
  }

  return previous
}

// tests
console.log(countAndSay(1)) // [1]
// console.log(countAndSay(2)) // [1, 1]
