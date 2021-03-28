// Creating a function that creates cookies based on the pokemon the user has selected
function pokemonSelection(pokemonSelected) {
    Cookies.set(`selection`, pokemonSelected);
    Cookies.set(`userMaxHealth`, `1000`);
    Cookies.set(`userCurrentHealth`, `1000`);
    Cookies.set(`computerMaxHealth`, `1000`);
    Cookies.set(`computerCurrentHealth`, `1000`);
    Cookies.set(`computerPokemon`, `Phantump`);
}