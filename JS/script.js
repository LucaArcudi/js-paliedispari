// Palidroma
// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
// Dichiariamo chi ha vinto.
// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.



function isPalindrome (word) {

    let reversedWord = "";

    for(let i = word.length -1; i >= 0; i--){

        reversedWord += word.charAt(i);

    }

    if (reversedWord.toLowerCase() === word.toLowerCase()){

        console.log(`${word} is palindrome`);

    } else {

        console.log(`${word} isn't palindrome`);

    }
    
    return reversedWord;
}

const userWord = prompt("inserisci una parola");

isPalindrome (userWord);




