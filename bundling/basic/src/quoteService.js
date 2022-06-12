export function getQuote() {
    return fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
}