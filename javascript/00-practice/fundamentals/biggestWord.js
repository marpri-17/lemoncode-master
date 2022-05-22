// BiggestWord

function biggestWord(phrase) {
    // Implementation here
    const splittedPhrase = phrase.split(' ');
    const sorteredWords = splittedPhrase.sort((a, b )=>{
        if(a.length === b.length){
            return 0
        } else if( a.length > b.length){
            return -1
        } else {
            return 1
        }
    });
    return sorteredWords[0]
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
