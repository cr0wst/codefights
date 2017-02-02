// https://codefights.com/challenge/KBmHkh6b7q68QBiHd
// You are given a string, your goal is to rearrange its letters in alphabetical order. 
// If the same letter is present both in lowercase and uppercase forms in the initial string, 
// the uppercase occurrence should go first in the resulting string.

// For str = "Vaibhav", the output should be
// sortIt(str) = "aabhiVv".

function sortIt (str) {
  // Array to store the letters as numbers.
  var numbers = []

  // First translate each letter into a number.  Not the ascii number though
  // a better way for doing capital/lowercase sort.
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i)
    // Capitals are translated to 1, 3, 5, ... using 2X - 129
    // Lowercase are translated to 2, 4, 6, ... using 2X - 192
    var shift = (code <= 90) ? 129 : 192
    numbers.push(2 * code - shift)
  }

  numbers.sort(function (a, b) { return a - b })

  var output = ''
  numbers.forEach(function (it) {
    // Even means capital so we inverse the math done above with 129
    // Odd means lowercase so we inverse the math done above with 192
    var shift = (it % 2) ? 129 : 192
    output += String.fromCharCode((it + shift) / 2)
  })

  return output
}
