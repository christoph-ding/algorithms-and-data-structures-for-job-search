function selectionSort(list) {
  let low = 0
  let high = list.length - 1
  select(list, low, high)
}

function select(list, low, high) {
  if (low < high) {
    let min = null
    let minIndex = null
    let current = null

    // find the minimum
      for (let i = low; i <= high; i++) {
        current = list[i]
        if (min === null || current < min) {
          min = current
          minIndex = i
        }
      }

    // swap
    list[minIndex] = list[low]
    list[low] = min

    // continue
    select(list, low + 1, high)
  }
}

// tests
let listOne = [10, 5, 2, 8, 3, 9, 7, 6, 1, 4]
selectionSort(listOne)
console.log(listOne)
