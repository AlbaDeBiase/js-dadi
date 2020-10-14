// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.


var giocata1 = [1, 2, 3, 4, 5 ,6];

Math.floor(Math.random()*7);
document.getElementById("giocata1").innerHTML =
Math.floor(Math.random() * 7);

Math.floor(Math.random()*7);
document.getElementById("giocata2").innerHTML =
Math.floor(Math.random() * 7);

// se giocata 1 è >6 ha vinto
//
// se giocata 2 è >6 ha vinto
var haVinto = false;
for(var i = 0; i < giocata1.length; i++) {
    console.log(giocata1[i]);

if (giocata2 == giocata1[i]) {
// console.log("giocata2");
haVinto = true;

    }
}

if (haVinto == true) {
document.getElementById("giocata1").innerHTML = "ha vinto";

} else {
    document.getElementById("giocata2").innerHTML = "ha vinto";
}


var haVinto = false;
for(var i = 0; i < giocata2.length; i++) {
    console.log(giocata2[i]);

if (giocata1 == giocata2[i]) {
// console.log("giocata2");
haVinto = true;

    }
}

if (haVinto == true) {
document.getElementById("giocata1").innerHTML = "ha vinto";

} else {
    document.getElementById("giocata2").innerHTML = "ha perso";
}
