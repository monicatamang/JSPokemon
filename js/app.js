// Creating a function that creates a cookie based on the pokemon the user has selected
function pokemonSelection(pokemonSelected) {
    Cookies.set(`selection`, pokemonSelected);
}

var userMaxHealth = Cookies.set(`userMaxHealth`, `1000`);
var userCurrentHealth = Cookies.set(`userCurrentHealth`, `1000`);
var computerMaxHealth = Cookies.set(`computerMaxHealth`, `1000`);
var computerCurrentHealth = Cookies.set(`computerCurrentHealth`, `1000`);