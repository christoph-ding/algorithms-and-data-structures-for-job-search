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


  // run through the linked list until the fastRunner hits the end

  // the slow runner is now Nth from the end

  // remove it by making its previous.next point to slowrunner's next

}

// test
