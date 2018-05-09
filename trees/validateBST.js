function treeNode(val, lc, rc) {
  this.val = val
  this.lc = lc
  this.rc = rc
}

function validateBST(root) {

}

function validateBSTHelp(root, min, max) {

}

// tests
// valid tree
let nodeOne = new treeNode(1)
let nodeTwo = new treeNode(10)
let nodeThree = new treeNode(5, nodeOne, nodeTwo)

console.log(nodeThree)
