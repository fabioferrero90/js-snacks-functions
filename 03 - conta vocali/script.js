/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocali = ["a", "e", "i", "o", "u"]
let found = 0
// Dichiara la funzione qui.
const getVocals = string => {
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i)
    for (const element of vocali) {
      if (char === element) {
        found++
      }
    }
  }
}

function getVocalsRaw(string) {
  let foundRaw = 0
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i)
    for (const element of vocali) {
      if (char === element) {
        foundRaw++
      }
    }
  }
  return foundRaw
}
// Invoca la funzione qui e stampa il risultato in console

getVocals(word)
console.log(found)

console.log(getVocalsRaw(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)