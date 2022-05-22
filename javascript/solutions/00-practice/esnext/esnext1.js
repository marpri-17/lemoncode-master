// Fibonacci


const fibZero = 0;
const fibOne = 1;

// Fibonacci sequence formula
// fib(n + 1) = fib(n) + fib(n - 1)
//

/**
 * Returns Fibonacci number position
 * 
 */
function generateFibonnaciPosition(position) {
    if (typeof position === 'number') {
        const serie = []
        for (let i = 0; i <= position; i++) {
            if(i === 0){ 
                serie.push(fibZero);
            }
            else if(i === 1){ 
                serie.push(fibOne);
            } else {
                serie.push(serie[i - 1] + serie[i - 2]);
            }
            console.log(serie) 
        }   
        return serie[position];
    }
}

console.log(generateFibonnaciPosition(9));