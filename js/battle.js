// Getting the value of cookies based on the user's pokemon selection
var userPokemonSelection = Cookies.get(`selection`);
var computerPokemonSelection = Cookies.get(`computerPokemon`)

// Creating a new image tag, styling the images, appending the image tag to the 'userPokemon'
pokemonImage = document.createElement(`img`);
pokemonImage.style.width = `100%`;
pokemonImage.style.transform = `scaleX(-1)`;
document.getElementById(`userPokemonImage`).append(pokemonImage);
document.getElementById(`userPokemonImage`).style.width = `15vw`;

// Printing the image of the user's pokemon to the DOM
if (userPokemonSelection === `Turtwig`) {
    pokemonImage.setAttribute(`src`, `/images/blackTurtwig.jpg`);
} else if (userPokemonSelection === `Charmander`) {
    pokemonImage.setAttribute(`src`, `/images/blackCharmander.jpg`);
} else if (userPokemonSelection === `Piplup`) {
    pokemonImage.setAttribute(`src`, `/images/blackPiplup.jpg`);
}

// Getting the user's current health cookies and printing it to the DOM, styling the user's health points
var userCurrentHealth = Cookies.get(`userCurrentHealth`);
var userCurrentHP = document.createElement(`p`);
userCurrentHP.innerText = `${userCurrentHealth}/1000`;
userCurrentHP.style.marginTop = `5vh`;
document.getElementById(`userPokemon`).append(userCurrentHP);

// Getting the computer's current health cookies and printing it to the DOM, styling the user's health points
var computerCurrentHealth = Cookies.get(`computerCurrentHealth`);
var computerCurrentHP = document.createElement(`p`);
computerCurrentHP.innerText = `${computerCurrentHealth}/1000`;
computerCurrentHP.style.marginTop = `5vh`;
document.getElementById(`computerPokemon`).append(computerCurrentHP);

function attackMechanism() {
    computerCurrentHealth -= 200;
    Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
    computerCurrentHP.innerText = `${computerCurrentHealth}/1000`;

    if(computerCurrentHealth <= 0) {
        computerCurrentHealth = 0;
        Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
        computerCurrentHP.innerText = `${computerCurrentHealth}/1000`;
        var winnerMessage = `<h1>${userPokemonSelection} Wins!</h1>`;
        document.getElementById(`battleMessages`).innerHTML = winnerMessage;
    }

    userCurrentHealth -= 150;
    Cookies.set(`userCurrentHealth`, userCurrentHealth);
    userCurrentHP.innerText = `${userCurrentHealth}/1000`;

    if(userCurrentHealth <= 0) {
        userCurrentHealth = 0;
        Cookies.set(`userCurrentHealth`, userCurrentHealth);
        userCurrentHP.innerText = `${userCurrentHealth}/1000`;
        var winnerMessage = `<h1>${computerPokemonSelection} Wins!</h1>`;
        document.getElementById(`battleMessages`).innerHTML = winnerMessage;
    }
}

// if(gameOver) {
//     userCurrentHealth = 1000;
//     computerCurrentHealth = 1000;
// } else {
//     var restartGame = attackMechanism();
// }

// // var initialUserHP = 1000;
// // for(userCurrentHealth === 0 || computerCurrentHealth === 0; userCurrentHealth <= 0 || computerCurrentHealth <= 0; userCurrentHealth = initialUserHP) {
// //     var restartGame = attackMechanism();
// // }