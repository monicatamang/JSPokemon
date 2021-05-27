function pokemonSelection(pokemonSelected) {
    Cookies.set("userPokemonSelection", pokemonSelected);
    Cookies.set("userMaxHealth", "1000");
    Cookies.set("userCurrentHealth", "1000");
    Cookies.set("computerMaxHealth", "1000");
    Cookies.set("computerCurrentHealth", "1000");
}

let computerPlayerPokemon = ["Phantump", "Pancham", "Umbreon"];

let randomNum = Math.floor(Math.random() * 3);

for(let i = 0; i < computerPlayerPokemon.length; i++) {
    Cookies.set("computerPokemonSelection", computerPlayerPokemon[randomNum]);
}