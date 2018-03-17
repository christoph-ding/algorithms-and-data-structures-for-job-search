function stringCompression(characters) {
  let currentCharacterIndex = 0,
      currentCharacter = characters[currentCharacterIndex],
      runnerIndex = currentCharacterIndex + 1,
      differenceCurrentRunner = runnerIndex - currentCharacterIndex
      runnerCharacter;

  let countDigits = []

  while (runnerIndex <= characters.length) {
    // update the runner character
    runnerCharacter = characters[runnerIndex]

    console.log('runnerCharacter: ', runnerCharacter,
                'currentCharacter: ', currentCharacter,
                'difference: ', differenceCurrentRunner)

    // are they different now? (current)
    if (runnerCharacter !== currentCharacter) {
      differenceCurrentRunner = runnerIndex - currentCharacterIndex
      // what is the difference between 2 indices?
      // if only 1, rules...
      if (differenceCurrentRunner === 1) {
        // no writes
        // currentCharacterIndex advances 1
      } else {
      // if more 1, rules...
      // move currentCharacterIndex according to 'difference'
        countDigits = differenceCurrentRunner.string().split('')
        console.log('countDigits: ', countDigits)
        countDigits.forEach((digit) => {
          characters[currentCharacterIndex++] = digit
        }
        console.log('characters: ', characters)
      }
      // currentCharacter updates to new currentCharacter (the one just 'found' by fast runner)

    }
    // the runner will advance regardless    
    runnerIndex++
}

// tests
console.log(stringCompression(['a', 'a', 'b', 'a', 'c', 'c'])) // [a, 2, b, c, 2]
