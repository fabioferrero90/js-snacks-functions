/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const getInitials = array => {
  let initials = [];
  for (const element of array) {
    initials.push(element.charAt(0))
  }
  return initials
}

function getInitialsRaw(array) {
  let initialsRaw = [];
  for (const element of array) {
    initialsRaw.push(element.charAt(0))
  }
  return initialsRaw
}


// Invoca la funzione qui e stampa il risultato in console


console.log(getInitials(names))
console.log(getInitialsRaw(names))
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]