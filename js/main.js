// 1. chiedi all’utente il cognome

var nuovo_cognome = prompt("Inserisci il tuo cognome");


// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var lista_cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"] ;
lista_cognomi.push(nuovo_cognome)

console.log(lista_cognomi);

// 3. stampa la lista ordinata alfabeticamente

lista_cognomi.sort();
console.log(lista_cognomi) ;

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova