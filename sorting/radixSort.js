function radixSort(list) {
  // generate bins + helper queue
  let bins = generateBins()
  let helperQueue = list.slice()

  console.log('bins: ', bins) 
  

  // 'normalize' the number of digits in each
  let maxDigits = findMostDigits()
  normalize(helperQueue, maxDigits)

  console.log('max digits: ', maxDigits)
  console.log('helperQueue: ', helperQueue)
  

  // for each 'digit's place' in the element in key with the most digits
    // put each element, using it's 'digits place', put into proper 'bin', maintaing order

    // if unncessary, add more 'zeroes'

    // after finishing sorting into bins, requeue into helperQueue


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
    leadingZeroes = new Array(digits - elementLength).join('0')
    normalizedElement = leadingZeroes.concat(elementAsString)
    console.log('element: ', element, ' normalizedElement: ', normalizedElement)
    list[index] = normalizedElement
  })
}

function sortIntoBins(bins, list) {

}

function requeue(bins, helperQueue) {

}

// tests
let list = [100, 91, 999, 20, 7, 543, 1293, 76, 823, 3918]
normalize(list, 10)
console.log(list)
