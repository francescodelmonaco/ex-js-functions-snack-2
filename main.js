// snack 1
function somma(a, b) {
    return a + b;
};

console.log(somma(5, 10));

// funzione anonima
const funzioneSommaAnonima = function (a, b) {
    return a + b;
};

console.log(funzioneSommaAnonima(10, 22));

// arrow
const funzioneSommaArrow = (a, b) => a + b;

console.log(funzioneSommaArrow(2, 7));

// snack 2
const quadrato = (a) => a * a;

console.log(quadrato(3));

// snack 3
const sottrazione = (a, b) => a - b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, callback) => callback(a, b);

console.log(eseguiOperazione(6, 2, sottrazione));
console.log(eseguiOperazione(6, 2, divisione));

// snack 4
function creaTimer(ms) {
    return setTimeout(() => console.log("Tempo scaduto!"), ms)
};

creaTimer(2000);

// snack 5
function stampaOgniSecondo(text) {
    return setInterval(() => console.log(text), 1000)
};

stampaOgniSecondo("Stampo ogni secondo...");

// snack 6
function creaContatoreAutomatico(ms) {
    let counter = 0;

    return () => {
        setInterval(() => {
            console.log(counter++);
        }, ms);
    };
}

const avviaContatore = creaContatoreAutomatico(1000);
avviaContatore();