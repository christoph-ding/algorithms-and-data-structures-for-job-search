function linkListNode(val, next) {
  this.val = val 
  this.next = next || null
}

function treeNode(val, lc, rc) {
  this.val = val
  this.lc = lc || null
  this.rc = rc || null
}

function BTToLL(root) {
  // current root is the first LLnode

  // 




  // return the head of the LL
}

// traverse
function traverseLL(head) {
  let current = head

  while (current) {
    console.log(current)
    current = current.next
  }
}
 
// tests
let treeNodeOne = new treeNode(1)
let treeNodeTwo = new treeNode(2)
let treeNodeThree = new treeNode(3)
treeNodeOne.lc = treeNodeTwo
treeNodeOne.rc = treeNodeThree

traverseLL(treeNodeOne)


///
//    1
//   2  5
//  3 4
//
// 1 -> 1.lc = 2 -> 2.lc = 3 -> 2.rc = 4 -> 1.rc = 5

// currentNode currentLLHead
// add $me as a LL to currentLLHead.next
// does $me have lc?
//   add lc to queue
// go to next in queue

// no, 
