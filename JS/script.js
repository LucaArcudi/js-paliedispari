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



// function isPalindrome (word) {

//     let reversedWord = "";

//     for(let i = word.length -1; i >= 0; i--){

//         reversedWord += word.charAt(i);

//     }

//     if (reversedWord.toLowerCase() === word.toLowerCase()){

//         console.log(`${word} is palindrome`);

//     } else {

//         console.log(`${word} isn't palindrome`);

//     }
    
//     return reversedWord;
// }

// const userWord = prompt("inserisci una parola");

// isPalindrome (userWord);


function getRandomNumber (min, max){

    const randomNuber = Math.floor(Math.random() * ( max - min + 1) ) + min;

    return randomNuber;

}


function oddOrEven (number) {
    if (number % 2 === 0){
        return "pari";
    } else {
        return "dispari";
    }
}

const playerChoice = prompt("Pari o dispari?").toLocaleLowerCase().trim();

console.log("L'utente ha scelto:" + " " + playerChoice);

const playerNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

console.log("L'utente ha scelto:" + " " + playerNumber);

const aINumber = getRandomNumber (1, 5);

console.log("AI number:" + " " + aINumber);

const sum = playerNumber + aINumber;

if (oddOrEven(sum) === playerChoice){
    console.log("Hai vinto")
}
