function linkedListNode(key, next) {
  this.key = key
  this.next = next || null
}

function removeNthNodefromEndofLL(headNode, Nth) {
  // we use two runners
  let slowRunner = headNode

  // make a 'faster' runner that is N ahead of headNode
  let fastRunner = headNode
  let counter = 0

  // while loop to put the faster runner ahead
  while (counter < Nth && fastRunner !== null) {
    console.log('fastRunner: ', fastRunner.key, ' counter: ', counter )
    // what if the list is shorter than 'Nth'?
    fastRunner = fastRunner.next
    counter++
  }

  console.log('fast runner starting at: ', fastRunner.key)

  // run through the linked list until the fastRunner hits the end

  // the slow runner is now Nth from the end

  // remove it by making its previous.next point to slowrunner's next

}

function iterateThroughLL(headOfLinkedList) {
  let current = headOfLinkedList
  const vals = []
  while (current) {
    vals.push(current.key)
    current = current.next
  }
  console.log(vals.join( ' -> '))

}

// test
let three = new linkedListNode(3)
let two = new linkedListNode(2, three)
let one = new linkedListNode(1, two)

iterateThroughLL(one)
removeNthNodefromEndofLL(one, 2)

// 1 2 3 
// 2nd from last - remove 2
// slow fast
//  2   null
//  1     3
// so fast is 2 (N) ahead of slow
