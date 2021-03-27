var computerPokemonCurrentHealth = Cookies.get(`computerCurrentHealth`);
var computerHP = `<p>Computer Current Health: ${computerPokemonCurrentHealth}</p>`;
document.getElementById(`pokemonTwo`).innerHTML = computerHP;

var userPokemonCurrentHealth = Cookies.get(`userCurrentHealth`);
Cookies.set(`userCurrentHealth`, userPokemonCurrentHealth);
var userHP = `<p>User Current Health: ${userPokemonCurrentHealth}</p>`;
document.getElementById(`pokemonOne`).innerHTML = userHP;


function attackMechanism() {
    computerPokemonCurrentHealth -= 200;
    Cookies.set(`computerCurrentHealth`, computerPokemonCurrentHealth);

    var computerHP = `<p>Computer Current Health: ${computerPokemonCurrentHealth}</p>`;
    document.getElementById(`pokemonTwo`).innerHTML = computerHP;

    if(computerPokemonCurrentHealth <= 0) {
        computerPokemonCurrentHealth = 0;
        var userPokemonWinner = Cookies.get(`selection`);
        var winnerMessage = document.createElement(`p`);
        winnerMessage.innerText = `${userPokemonWinner} Wins!`;
        document.getElementById(`pokemonTwo`).append(winnerMessage);
        Cookies.set(`computerCurrentHealth`, computerPokemonCurrentHealth);
    } else {
        var userPokemonCurrentHealth = Cookies.get(`userCurrentHealth`);
        userPokemonCurrentHealth -= 200;
        Cookies.set(`userCurrentHealth`, userPokemonCurrentHealth);
        var userHP = `<p>User Current Health: ${userPokemonCurrentHealth}</p>`;
        document.getElementById(`pokemonOne`).innerHTML = userHP;
    }
}