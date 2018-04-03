function Queue() {
  this.data = []
  this.backIndex = 0
  this.frontIndex = 0
}

Queue.prototype.enqueue = function(item) {
  this.data[this.backIndex++] = item
}

Queue.prototype.dequeue = function() {
  if (this.frontIndex === this.backIndex) {
    return 'empty queue'
  } else {
    let thing = this.data[this.frontIndex]
    this.data[this.frontIndex++] = null
    return thing
  }
}

// tests
let testQueue = new Queue()
console.log(testQueue.dequeue()) // 'empty queue'
testQueue.enqueue(1)
testQueue.enqueue(2)
console.log(testQueue.dequeue()) // '1'
console.log(testQueue.dequeue()) // '2'
console.log(testQueue.dequeue()) // 'empty queue'

