const schermo = document.getElementById("schermo");

function aggiungiSchermo(input) {
    schermo.value += input;
}

function somma() {
    try{
        schermo.value = eval(schermo.value).toFixed(9);
    }
    catch(error) {
        schermo.value = "Errore";
    }
}

function pulisciSchermo() {
    schermo.value = "";
}