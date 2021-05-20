function pokemonSelection(pokemonSelected) {
    Cookies.set(`userPokemonSelection`, pokemonSelected);
    Cookies.set(`userMaxHealth`, `1000`);
    Cookies.set(`userCurrentHealth`, `1000`);
    Cookies.set(`computerMaxHealth`, `1000`);
    Cookies.set(`computerCurrentHealth`, `1000`);
}