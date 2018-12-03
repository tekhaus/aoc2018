// --- Part Two ---
// Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

// The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

// abcde
// fghij
// klmno
// pqrst
// fguij
// axcye
// wvxyz
// The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

// What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)

const fs = require('fs')
const input = fs.readFileSync('day2-input.txt', 'utf8').split('\n')

const findSimilar = boxes => {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      let diffs = 0
      let indexLastDiff
      for (let k = 0; k < boxes[i].length; k++) {
        if ([...boxes[i]][k] === [...boxes[j]][k]) continue
        indexLastDiff = k
        diffs++
        if (diffs > 1) break
      }
      if (diffs === 1) return boxes[i].substr(0, indexLastDiff) + boxes[i].substr(indexLastDiff + 1)
    }
  }
}

console.log('puzzle input =>', findSimilar(input)) // agimdjvlhedpsyoqfzuknpjwt