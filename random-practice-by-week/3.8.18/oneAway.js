function oneAway(one, two) {
  let discrepencies = 0

  let oneRunner = 0
  let twoRunner = 0
  let oneChar,
      twoChar;

  while (oneRunner < one.length || twoRunner < two.length) {
    oneChar = one[oneRunner]
    twoChar = two[twoRunner]
    
    // console.log('one: ', oneChar, ' two: ', twoChar, ' discrepencies: ', discrepencies)

    if (oneChar !== twoChar) {
      // we can 'shift' i.e. ale pale
      if (one[oneRunner] === two[twoRunner + 1]) {
        // console.log('shift one')
        twoRunner++
      } else if (one[oneRunner  + 1] === two[twoRunner]) { // pale ale
        // console.log('shift two')
        oneRunner++
      }
      discrepencies++
    }
    if (discrepencies > 1) {
      return false
    }
    // replace would work?
    oneRunner++
    twoRunner++
  }
  return true
}

// tests
console.log(oneAway('ace', 'ble')) // should return FALSE
console.log(oneAway('a', 'b')) // TRUE
console.log(oneAway('a', 'bc')) // FALSE
console.log(oneAway('a', 'bcasdf')) // FALSE
console.log(oneAway('ale', 'pale')) // TRUE
console.log(oneAway('pale', 'ale')) // TRUE
