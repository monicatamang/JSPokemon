let userPokemonSelection = Cookies.get(`userPokemonSelection`);
let userMaxHealth = Cookies.get(`userMaxHealth`);
let userCurrentHealth = Cookies.get(`userCurrentHealth`);

let computerPokemonSelection = Cookies.get(`computerPokemonSelection`);
let computerMaxHealth = Cookies.get(`computerMaxHealth`);
let computerCurrentHealth = Cookies.get(`computerCurrentHealth`);

let userCurrentHP = document.getElementById(`userHealthBarFill`);
let computerCurrentHP = document.getElementById(`computerHealthBarFill`);

let userPokemonName = document.getElementById(`userPokemonName`);
userPokemonName.append(userPokemonSelection);
userPokemonName.style.color = `white`;
userPokemonName.style.textTransform = `uppercase`;
// userPokemonName.style.marginBottom = `5vh`;

let computerPokemonName = document.getElementById(`computerPokemonName`);
computerPokemonName.append(computerPokemonSelection);
computerPokemonName.style.color = `white`;
computerPokemonName.style.textTransform = `uppercase`;

pokemonImage = document.createElement(`img`);
pokemonImage.style.width = `100%`;
pokemonImage.style.transform = `scaleX(-1)`;
document.getElementById(`userPokemonImage`).append(pokemonImage);
document.getElementById(`userPokemonImage`).style.width = `15vw`;

let computerImage = document.createElement(`img`);
computerImage.style.width = `100%`;
computerImage.style.transform = `scaleX(-1)`;
document.getElementById(`computerPokemonImage`).append(computerImage);
document.getElementById(`computerPokemonImage`).style.width = `15vw`;

let computerPlayerOptions = [

    {
        name: `Phantump`,
        image: `/images/blackPhantump.jpg`
    },

    {
        name: `Pancham`,
        image: `/images/blackPancham.jpg`
    },

    {
        name: `Umbreon`,
        image: `/images/blackUmbreon.jpg`
    }
]

let randomNum = Math.floor(Math.random() * 3);

for(let i = 0; i < computerPlayerOptions.length; i++) {
    computerImage.setAttribute(`src`, computerPlayerOptions[randomNum].image);
    Cookies.set(`computerPokemonSelection`, computerPlayerOptions[randomNum].name);
    document.getElementById(`computerPokemonName`).innerText = computerPlayerOptions[randomNum].name;
}

computerPokemonSelection = Cookies.get(`computerPokemonSelection`);

let userPlayerOptions = [

    {
        name: `Turwig`,
        image: `/images/blackTurtwig.jpg`,
        attackOne: `Mega Drain`,
        attackTwo: `Leaf Storm`,
        attackThree: `Seed Bomb`,
        attackFour: `Synthesis`,
        damageOne: 100,
        damageTwo: 150,
        damageThree: 300,
        damageFour: 200
    },

    {
        name: `Charmander`,
        image: `/images/blackCharmander.jpg`,
        attackOne: `Fire Blast`,
        attackTwo: `Flamethrower`,
        attackThree: `Heat Wave`,
        attackFour: `Sunny Day`,
        damageOne: 200,
        damageTwo: 150,
        damageThree: 300,
        damageFour: 100
    },

    {
        name: `Piplup`,
        image: `/images/blackPiplup.jpg`,
        attackOne: `Aqua Ring`,
        attackTwo: `Bubble`,
        attackThree: `Hydro Pump`,
        attackFour: `Whirlpool`,
        damageOne: 200,
        damageTwo: 150,
        damageThree: 300,
        damageFour: 100
    },
]

let gameOver = false;

function userHpPercentage() {

    let userPercentage = Math.round((userCurrentHealth / userMaxHealth) * 100);
    userCurrentHP.style.width = `${userPercentage}%`;
    document.getElementById(`userHealthPercentage`).innerText = `${userPercentage}%`;

    if(userPercentage <= 50) {
        userCurrentHP.style.background = `#EEE8A9`;
    }
    
    if(userPercentage <= 30) {
        userCurrentHP.style.background = `#B46569`;
    }

    if(userPercentage <= 0) {
        userPercentage = 0;
        gameOver = true;
        let winnerMessage = `<h1>${computerPokemonSelection} Wins</h1>`;
        document.getElementById(`battleMessages`).innerHTML = winnerMessage;
    }
}

function computerHpPercentage() {

    let computerPercentage = Math.round((computerCurrentHealth / computerMaxHealth) * 100);
    computerCurrentHP.style.width = `${computerPercentage}%`;
    document.getElementById(`computerHealthPercentage`).innerText = `${computerPercentage}%`;

    if(computerPercentage <= 50) {
        computerCurrentHP.style.background = `#EEE8A9`;
    }
    
    if(computerPercentage <= 30) {
        computerCurrentHP.style.background = `#B46569`;
    }

    if(computerPercentage <= 0) {
        computerPercentage = 0;
        gameOver = true;
        let winnerMessage = `<h1>${userPokemonSelection} Wins</h1>`;
        document.getElementById(`battleMessages`).innerHTML = winnerMessage;
    }
}

function computerPlayerTurn() {
    let computerDamage = Math.round((Math.random() * 100) + 50);

    if(userCurrentHealth > 0) {
        userCurrentHealth -= computerDamage;
        Cookies.set(`userCurrentHealth`, userCurrentHealth);
        userHpPercentage();
    }

    if(userCurrentHealth <= 0) {
        userCurrentHealth = 0;
        Cookies.set(`userCurrentHealth`, userCurrentHealth);
        userHpPercentage();
    }
}

function userPlayerTurn() {

    let userDamage = Math.round((Math.random() * 100) + 50);

    if(computerCurrentHealth > 0) {
        computerCurrentHealth -= userDamage;
        Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
        computerHpPercentage();
        setTimeout(computerPlayerTurn, 1000);
    }

    if(computerCurrentHealth <= 0) {
        computerCurrentHealth = 0;
        Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
        computerHpPercentage();
        clearTimeout(computerPlayerTurn);
    }
}

function attackEnemy() {

    if(gameOver === false) {

        userPlayerTurn();
    }
}

let userAttackBtnOne = document.getElementById("attackBtnOne");
userAttackBtnOne.addEventListener("click", attackEnemy);

// let userAttackButton = document.getElementById(`attackButton`);
// userAttackButton.addEventListener(`click`, attackEnemy);

if (userPokemonSelection === `Turtwig`) {
    pokemonImage.setAttribute(`src`, `/images/blackTurtwig.jpg`);
    // userAttackButton.innerText = userPlayerOptions[0].attackOne;
} else if (userPokemonSelection === `Charmander`) {
    pokemonImage.setAttribute(`src`, `/images/blackCharmander.jpg`);
} else if (userPokemonSelection === `Piplup`) {
    pokemonImage.setAttribute(`src`, `/images/blackPiplup.jpg`);
}

// Calling the functions to print the intiial user's HP and computer's HP to the DOM right when the user enters the battle page
userHpPercentage();
computerHpPercentage();