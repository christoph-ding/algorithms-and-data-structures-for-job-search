function quickSort(unsortedList, leftBound, rightBound) {
  leftBound = leftBound || 0
  rightBound = rightBound || unsortedList.length - 1

  let pivot = partition(unsortedList, leftBound, rightBound) 
}

function partition(unsortedList, leftBound, rightBound) {
  console.log('partition: ', unsortedList, 'leftBound: ', leftBound, ' rightBound: ', rightBound)
  
}

// tests
let inputListOne = [3, 6, 10, 7, 2, 1, 11]
console.log(quickSort(inputListOne))
