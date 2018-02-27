function bubbleSort(list) {
  // we go until we make a pass in which no switches were made
  let goAgain = true

  // we don't swap the last element, hence only iterating to the penultimate element
  while (goAgain) {
    // if we go through the entire list without making a swap, we do not iterate anymore
    goAgain = false

    for (let i = 0; i <= list.length - 2; i++) {
      let currentElem = list[i]
      let nextElem = list[i + 1]

      // testing
      console.log('currentElem: ', currentElem, ' nextElem: ', nextElem)
      if (currentElem > nextElem) {
        // swap
        list[i] = nextElem
        list[i + 1] = currentElem
        goAgain = true
      }
    }
  }
}

// tests
let listOne = [3,2,1]
bubbleSort(listOne)
console.log(listOne)
