function oneAway(one, two) {

  let discrepencies = 0

  let oneRunner = 0
  let twoRunner = 0
  let oneChar,
      twoChar;

  while (oneRunner < one.length && twoRunner < two.length) {
    oneChar = one[oneRunner]
    twoChar = two[twoRunner]
    
    if (oneChar !== twoChar && !(discrepencies)) {
      console.log('mismatch!: ', 'oneChar: ', oneChar, ' twoChar: ', twoChar)
    } else if (oneChar !== twoChar && discrepencies) {
      return false
    }

    // replace would work?
    oneRunner++
    twoRunner++
  }
}

// tests
console.log(oneAway('ale', 'ble')) // should return TRUE 
