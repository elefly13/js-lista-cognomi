// 1. chiedi all’utente il cognome

var nuovo_cognome = prompt("Inserisci il tuo cognome");


// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var lista_cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"] ;

//correzione della prima lettera se inserita minuscola eminuscole tutte le altre lettere
nuovo_cognome = nuovo_cognome.charAt(0).toUpperCase() + nuovo_cognome.slice(1).toLowerCase();

lista_cognomi.push(nuovo_cognome);
// var text2 = nuovo_cognome.toUpperCase();

console.log(lista_cognomi);

// 3. stampa la lista ordinata alfabeticamente

lista_cognomi.sort();//mette in ordine alfabetico
console.log(lista_cognomi);

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var lista_cognomiIndex = lista_cognomi.indexOf(nuovo_cognome);
lista_cognomiIndex = lista_cognomiIndex + 1;

console.log(lista_cognomiIndex);


var i = 0;
while (i < lista_cognomi.length) {
    document.getElementById("listaCognomi").innerHTML += "<li>" + lista_cognomi[i] + "</li>";
    i++;
}
