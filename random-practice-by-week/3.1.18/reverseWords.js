function reverseWords(sentence) {
  // we find the next space so that we have the bounds of a 'word'
  let start,
      middle,
      end;

  // keep doing this while there are more words 
  // reverse that word
}

function reverseSingleWord(word) {
  // unfortunately we cannot change the characters of a string in place
  let wordAsCharacterArray = makeCharArray(word)
  let middle = Math.floor((word.length) / 2)

  // iterate backwards from the end to the middle
  // iterate forwards from the start to the middle
  // for each, swap the two ... use temp variables, blah blah 
  for (let i = 0, j = word.length - 1; i <= middle && j >= middle; i++, j--) {
    swap(wordAsCharacterArray, i, j)
  }
  return wordAsCharacterArray.join('')
}

function makeCharArray(word) {
  return word.slice().split('')
}

function swap(word, indexOne, indexTwo) {
  let tempRight = word[indexTwo]
  word[indexTwo] = word[indexOne]
  word[indexOne] = tempRight
}

// the goal:
// linear time
// constant space:
// constant number of 'helper' variables
// chance IN PLACE for the ... most interesting problem

// DON"T USE:
// extra space (no arrays)

// test
console.log(reverseSingleWord('robxt'))
