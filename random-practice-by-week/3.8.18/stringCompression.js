function stringCompression(characters) {
  let currentCharacterIndex = 0
      currentCharacter
      runnerIndex = 1
      runnerCharacter;

  while (currentRunnerIndex < characters.length) {
    // update the runner character
    // are they different now? (current)

    // what is the difference between 2 indices?
        // if only 1, rules...
          // no writes
          // currentCharacterIndex advances 1
        // if more 1, rules...
          // write 'difference' to currentCharacterIndex + 1 ... or more cause digits
          // move currentCharacterIndex according to 'difference'
        // currentCharacter updates to new currentCharacter (the one just 'found' by fast runner)
    // the runner will advance regardless
  }


}

// tests
console.log(stringCompression(['a', 'a', 'b', 'c', 'c'])) // [a, 2, b, c, 2]
