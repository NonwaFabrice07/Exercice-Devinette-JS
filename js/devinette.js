/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
for (var i = 1; i <= 6; i++) {
    var essai = Number(prompt("Donnez un nombre entre 1 et 100.")); //valeur à entrer

    if (essai === solution && i <= 6) {
        console.log("Bravo! La solution était " + solution + "\n" + "Vous avez trouvé en " + i + " essai(s)");
    break; // Lorsaue la solution est trouvé il interrompt la boucle
    } 
    else if (essai !== solution && i <= 6) {
        if (essai < solution) {
        console.log(essai + " est trop petit");
        } else if (essai > solution) {
        console.log(essai + " est trop grand");
        }
    }
}
// si à la  fin de la boucle la solution n'est toujours pas trouver
if (essai !== solution) {
    console.log("Perdu...La solution était " + solution);
}

//Merci énormement à la team OpenClassroom