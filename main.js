// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.


var giocate = [1, 2, 3, 4, 5 ,6];

var giocata1 = Math.floor(Math.random()*6 +1);
document.getElementById("giocata1").innerHTML =
giocata1;

var giocata2 = Math.floor(Math.random()*6 +1);
document.getElementById("giocata2").innerHTML =
giocata2;

// se giocata 1 è >6 ha vinto
// se giocata 2 è >6 ha vinto

if ( giocata1 > giocata2 ) {
document.getElementById('giocata1').innerHTML+= "ha vinto"
document.getElementById('giocata2').innerHTML+= "ha perso"
}

else if ( giocata1 < giocata2 ) {
document.getElementById('giocata2').innerHTML+= "ha vinto"
document.getElementById('giocata1').innerHTML+= "ha perso"
}




// var haVinto = false;
// for(var i = 0; i < giocata1.length; i++) {
//     console.log(giocata1[i]);
//
// if (giocata2 == giocata1[i]) {
// // console.log("giocata2");
// haVinto = true;
//
//     }
// }
//
// if (haVinto == true) {
// document.getElementById("giocata1").innerHTML = "ha vinto";
//
// } else {
//     document.getElementById("giocata2").innerHTML = "ha vinto";
// }
