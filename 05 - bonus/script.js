/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const time = new Date()
const hours = time.getHours()

// Dichiara la funzione qui.
const saluto = firstname => {
  if (hours < 13) {
    return `Buongiorno ${firstname}`
  } else if (hours < 17) {
    return `Buon Pomeriggio ${firstname}`
  } else {
    return `Buonasera ${firstname}`
  }
}

function salutoRaw(firstname) {
  if (hours < 13) {
    return `Buongiorno ${firstname}`
  } else if (hours < 17) {
    return `Buon Pomeriggio ${firstname}`
  } else {
    return `Buonasera ${firstname}`
  }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name))
console.log(salutoRaw(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.