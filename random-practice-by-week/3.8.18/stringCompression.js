function stringCompression(characters) {
  let currentCharacterIndex = 0,
      currentCharacter = characters[currentCharacterIndex],
      runnerIndex = currentCharacterIndex + 1,
      differenceCurrentRunner = runnerIndex - currentCharacterIndex,
      runnerCharacter;

  let countDigits = []

  while (runnerIndex <= characters.length) {
    runnerCharacter = characters[runnerIndex]

    if (runnerCharacter !== currentCharacter) {
      if (differenceCurrentRunner > 1) {
        countDigits = differenceCurrentRunner.toString().split('')
        countDigits.forEach((digit) => {
          characters[++currentCharacterIndex] = digit
        })
      }

      if (runnerCharacter !== undefined) {
        currentCharacter = runnerCharacter
        characters[++currentCharacterIndex] = currentCharacter
      }
      differenceCurrentRunner = 0
    }
    differenceCurrentRunner++
    runnerIndex++
  }

  return characters.slice(0, ++currentCharacterIndex)
}

// tests
let chars = ['a', 'a', 'a','b', 'b', 'b', 'c', 'c', 'd', 'a', 'a']
console.log(chars)
chars = stringCompression(chars) // [a, 2, b]
console.log(chars)
