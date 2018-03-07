function radixSort(list) {
  // generate bins + helper queue
  let bins = generateBins()
  let helperQueue = list.slice()

  // 'normalize' the number of digits in each
  let maxDigits = findMostDigits(list)
  let currentPlace = maxDigits
  normalize(helperQueue, maxDigits)
  
  let currentDigit

  while (currentPlace > 0) {
    helperQueue.forEach((element) => {
      currentDigit = element[currentPlace - 1]
      bins[currentDigit].push(element)
    })

    helperQueue = requeue(bins, helperQueue)
    bins = generateBins()
    currentPlace--
  }

  reNumber(helperQueue)
  return helperQueue
}

function generateBins() {
  let bins = {}

  for (let i = 0; i <= 9; i++) {
    bins[i] = []
  }

  return bins
}

function findMostDigits(list) {
  let maxDigits = 0
  let currentDigits = 0
  list.forEach(function(element) {
    currentDigits = String(element).length
    if (currentDigits > maxDigits) {
      maxDigits = currentDigits
    }
  })
  return maxDigits
}

function normalize(list, digits) {
  let elementAsString,
      elementLength,
      leadingZeroes,
      normalizedElement

  list.forEach((element, index) => {
    elementAsString = String(element)
    elementLength = elementAsString.length
    leadingZeroes = new Array(digits - elementLength + 1).join('0')
    normalizedElement = leadingZeroes.concat(elementAsString)
    list[index] = normalizedElement
  })
}

function sortIntoBins(bins, list) {

}

function requeue(bins, helperQueue) {
  helperQueue = []

  let currentBin
  let helperQueueIndex = 0
  for (let i = 0; i <= 9; i++) {
    currentBin = bins[i]
    currentBin.forEach((element) => {
      helperQueue[helperQueueIndex] = element
      helperQueueIndex++
    })
  }
  return helperQueue
}

function reNumber(list) {
  list.forEach((element, index) => {
    list[index] = Number(element)
  })
}

// tests
let list = [100, 91, 999, 20, 7, 543, 1293, 76, 823, 3918]
console.log(radixSort(list))

