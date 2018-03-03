function reverseWords(sentence) {
  // we find the next space so that we have the bounds of a 'word'
  let start,
      middle,
      end;

  // keep doing this while there are more words 
  // reverse that word

}

function reverseSingleWord(sentence, start, middle, end) {
  // unfortunately we cannot change the characters of a string in place


  start = start || 0
  end = end || sentence.length - 1
  middle = middle || Math.floor((start + end) / 2)

  console.log('middle: ', middle, ' letter: ', sentence[middle])

  let leftLetter,
      rightLetter;



  // iterate backwards from the end to the middle
  // iterate forwards from the start to the middle
  // for each, swap the two ... use temp variables, blah blah 
  for (let i = start, j = end; i <= middle && j >= middle; i++, j--) {
    leftLetter = sentence[i]
    rightLetter = sentence[j]
    console.log('leftLetter: ', leftLetter, ' rightLetter: ', rightLetter)
    swap(sentence, i, j)
    console.log('now: ', sentence)
  }
}

function makeCharArray(sentence, start, end) {
  
}

function swap(sentence, indexOne, indexTwo) {
  let tempRight = sentence[indexTwo]
  console.log('tempRight: ', tempRight)
  sentence[indexTwo] = sentence[indexOne]
  sentence[indexOne] = tempRight
}

// the goal:
// linear time
// constant space:
// constant number of 'helper' variables
// chance IN PLACE for the ... most interesting problem

// DON"T USE:
// extra space (no arrays)

// test
reverseSingleWord('robot') // middle is index 2 <- don't swap '2'
// reverseSingleWord('robots') // middle is index 3 <- swap '2' and '3'
