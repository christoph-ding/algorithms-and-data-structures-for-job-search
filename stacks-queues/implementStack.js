function Stack() {
  this.data = []
  this.topIndex = 0
}

Stack.prototype.push = function(item) {
  this.data[this.topIndex] = item
  this.topIndex++
}

Stack.prototype.pop = function() {
  if (this.topIndex === 0) {
    return 'this stack is empty'
  } else {
    return this.data[--this.topIndex]
  }
}

// tests
let testStack = new Stack()
console.log(testStack.pop()) // 'this stack is empty'
testStack.push(2)
console.log(testStack.pop()) // '2'
console.log(testStack.pop()) // 'this stack is empty'
testStack.push(3)
testStack.push(4)
testStack.push(5)
console.log(testStack.pop()) // '5'
