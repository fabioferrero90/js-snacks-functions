/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const wordsStartingWith = []
const wordsStartingWithRaw = []

// Dichiara la funzione qui.
const getWordsStartingWith = (array, word) => {
  for (const element of array) {
    const startingWord = element.charAt(0)
    if (startingWord === word) {
      wordsStartingWith.push(element)
    }
  }
}

function getWordsStartingWithRaw(array, word) {
  for (const element of array) {
    const startingWord = element.charAt(0)
    if (startingWord === word) {
      wordsStartingWithRaw.push(element)
    }
  }
  return wordsStartingWithRaw
}

// Invoca la funzione qui e stampa il risultato in console
getWordsStartingWith(names, "A")
console.log(wordsStartingWith)

console.log(getWordsStartingWithRaw(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]