// Write a function countBs that takes a string as its only argument and
// returns a number that indicates how many uppercase “B” characters 
// there are in the string.

// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that
// is to be counted (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.

// console.log(countBs("BBC"));
// → 2
// console.log(countChar("kakkerlak", "k"));
// → 4

const countBs = (string) => {
  const result = countChar(string, 'B')
  return result
}

const countChar = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if(string[i] === char) count++
  }
  return count
}