function mergSortWithIndices(list, helper, low, high) {
  low = low || 0
  high = high || list.length - 1
  helper = new Array(list.length)

  // break the currentList into a sorted 'left' list and a sorted 'right' list
  if (low < high) {
    let middle = Math.floor((low + high) / 2)
    mergSortWithIndices(list, helper, low, middle)
    mergSortWithIndices(list, helper, middle + 1, high)

    // combine the two lists, and return
    combineTwoSortedLists(list, helper, middle, low, high)
  }
}

function combineTwoSortedLists(list, helper, low, middle, high) {

}

function mergeSort(list) {
  // break the currentList into a sorted 'left' list and a sorted 'right' list

  // combine the two lists, and return
}

function combineTwoSortedLists(listOne, listTwo) {
  // this is the helper array
  let sortedList = []
  let listOneIndex = 0
  let listTwoIndex = 0

  while (listOneIndex < listOne.length && listTwoIndex < listTwo.length) {
    let listOneVal = listOne[listOneIndex]
    let listTwoVal = listTwo[listTwoIndex]

    if (listOneVal < listTwoVal) {
      sortedList.push(listOneVal)
      listOneIndex = listOneIndex + 1
    } else {
      sortedList.push(listTwoVal) 
      listTwoIndex = listTwoIndex + 1
    }
  }

  // put the remaining list in sortList also
  if (listOneIndex < listOne.length) {
    sortedList = sortedList.concat(listOne.slice(listOneIndex))
  } else {
    sortedList = sortedList.concat(listTwo.slice(listTwoIndex - 1))
  }

  return sortedList
}

// tests
let listOne = [3, 2, 1, 0]
// console.log(combineTwoSortedLists([1,3,5], [0, 2, 4, 6])) // [0, 1, .... 6]
