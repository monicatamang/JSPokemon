// Creating a function that creates cookies that saves the user's and computer's pokemon selection, current health and max health, right when the user has selected their pokemon
function pokemonSelection(pokemonSelected) {
    Cookies.set(`userPokemonSelection`, pokemonSelected);
    Cookies.set(`userMaxHealth`, `1000`);
    Cookies.set(`userCurrentHealth`, `1000`);
    Cookies.set(`computerMaxHealth`, `1000`);
    Cookies.set(`computerCurrentHealth`, `1000`);
    Cookies.set(`computerPokemonSelection`, `Phantump`);
}