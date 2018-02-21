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
  let headOfLL = new linkListNode(root.val)
  let tailOfCurrentLLNode = headOfLL

  // inner, in order traversal  
  function traverse(current) {
    console.log('current: ', current)

    let nextLinkedNode = new linkListNode(current.val) 
    tailOfCurrentLLNode.next = nextLinkedNode
    tailOfCurrentLLNode = tailOfCurrentLLNode.next

    if (current.lc) {
      traverse(current.lc)
    }
    if (current.rc) {
      traverse(current.rc)
    }
  }

  if (root.lc) {
    traverse(root.lc)
  }

  if (root.rc) {
    traverse(root.rc)
  }

  return headOfLL
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
let treeNodeFour = new treeNode(4)

treeNodeOne.lc = treeNodeTwo
treeNodeOne.rc = treeNodeThree
treeNodeThree.rc = treeNodeFour

// traverseLL(treeNodeOne)
console.log(BTToLL(treeNodeOne))

///
//    1
//   2  5
//  3 4
//
// 1 -> 1.lc = 2 -> 2.lc = 3 -> 2.rc = 4 -> 1.rc = 5
