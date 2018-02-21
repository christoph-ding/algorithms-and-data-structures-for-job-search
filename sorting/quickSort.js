function quickSort(unsortedList, leftBound, rightBound) {
  leftBound = leftBound || 0
  rightBound = rightBound || unsortedList.length - 1

  let index = partition(unsortedList, leftBound, rightBound)
  console.log('new index: ', unsortedList[index], ' now: ', unsortedList)

  // sort left half
  if (leftBound < index - 1) {
    console.log('sort left side: ', unsortedList.slice(leftBound, index), ' leftBound: ', leftBound, ' rightBound: ', index - 1)
    quickSort(unsortedList, leftBound, index - 1)
  } 
  // sort right half
  if (index < rightBound) {
    console.log('sort right side: ', unsortedList.slice(index, rightBound + 1), ' leftBound: ', index, ' rightBound: ', rightBound)
    quickSort(unsortedList, index, rightBound)
  }
}

function partition(unsortedList, leftBound, rightBound) {
  let pivot = unsortedList[Math.floor((leftBound + rightBound) / 2)]

  while (leftBound <= rightBound) {
    console.log('partition: ', unsortedList.slice(leftBound, rightBound + 1), 'leftBound: ', leftBound, ' rightBound: ', rightBound, ' pivot: ', pivot)
    // find a 'left side' elem that needs to be swapped to 'right side'
    // find a 'right side' elem that needs to be swapped to 'left side'
    while (unsortedList[leftBound] < pivot) {
      leftBound = leftBound + 1
    }
    while (unsortedList[rightBound] > pivot) {
      rightBound = rightBound - 1
    }
    if (leftBound <= rightBound) {
      // swap
      console.log('swap ', unsortedList[leftBound], ' ', unsortedList[rightBound])
      let origLeft = unsortedList[leftBound]
      unsortedList[leftBound] = unsortedList[rightBound]
      unsortedList[rightBound] = origLeft

      // keep on going
      leftBound = leftBound + 1
      rightBound = rightBound - 1
    }
  }
  console.log('========== done partition ==========')
  return leftBound
}

// tests
let inputListOne = [3, 6, 10, 7, 2, 1, 11]
quickSort(inputListOne)
console.log(inputListOne)
