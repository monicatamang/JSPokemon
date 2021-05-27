// Getting the user's pokemon selection and health points
let userPokemonSelection = Cookies.get(`userPokemonSelection`);
let userMaxHealth = Cookies.get(`userMaxHealth`);
let userCurrentHealth = Cookies.get(`userCurrentHealth`);

// Getting the computer's pokemon player and health points
let computerPokemonSelection = Cookies.get(`computerPokemonSelection`);
let computerMaxHealth = Cookies.get(`computerMaxHealth`);
let computerCurrentHealth = Cookies.get(`computerCurrentHealth`);

// Printing the user's pokemon's name
let userPokemonName = document.getElementById(`userPokemonName`);
userPokemonName.append(userPokemonSelection);

// Printing the computer's pokemon's name
let computerPokemonName = document.getElementById(`computerPokemonName`);
computerPokemonName.append(computerPokemonSelection);

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

let userCurrentHP = document.getElementById(`userHealthBarFill`);
let computerCurrentHP = document.getElementById(`computerHealthBarFill`);

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

function userPlayerTurn(userDamage) {

    if(computerCurrentHealth > 0) {
        computerCurrentHealth -= userDamage;
        Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
        computerHpPercentage();
    }

    if(computerCurrentHealth <= 0) {
        computerCurrentHealth = 0;
        Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
        computerHpPercentage();
    }
}

function userAttackOne() {
    if(gameOver === false) {
        for(let i = 0; i < userPlayerOptions.length; i++) {
            if (userPlayerOptions[i].name === userPokemonSelection) {
                userPlayerTurn(userPlayerOptions[i].damageOne);
                computerPlayerTurn();
            }
        }
    }
}

function userAttackTwo() {
    if(gameOver === false) {
        for(let i = 0; i < userPlayerOptions.length; i++) {
            if (userPlayerOptions[i].name === userPokemonSelection) {
                userPlayerTurn(userPlayerOptions[i].damageTwo);
                computerPlayerTurn();
            }
        }
    }
}

function userAttackThree() {
    if(gameOver === false) {
        for(let i = 0; i < userPlayerOptions.length; i++) {
            if (userPlayerOptions[i].name === userPokemonSelection) {
                userPlayerTurn(userPlayerOptions[i].damageThree);
                computerPlayerTurn();
            }
        }
    }
}

function userAttackFour() {
    if(gameOver === false) {
        for(let i = 0; i < userPlayerOptions.length; i++) {
            if (userPlayerOptions[i].name === userPokemonSelection) {
                userPlayerTurn(userPlayerOptions[i].damageFour);
                computerPlayerTurn();
            }
        }
    }
}

let userAttackBtnOne = document.getElementById("attackBtnOne");
let userAttackBtnTwo = document.getElementById("attackBtnTwo");
let userAttackBtnThree = document.getElementById("attackBtnThree");
let userAttackBtnFour = document.getElementById("attackBtnFour");
userAttackBtnOne.addEventListener("click", userAttackOne);
userAttackBtnTwo.addEventListener("click", userAttackTwo);
userAttackBtnThree.addEventListener("click", userAttackThree);
userAttackBtnFour.addEventListener("click", userAttackFour);

if (userPokemonSelection === `Turtwig`) {
    pokemonImage.setAttribute(`src`, `/images/blackTurtwig.jpg`);
} else if (userPokemonSelection === `Charmander`) {
    pokemonImage.setAttribute(`src`, `/images/blackCharmander.jpg`);
} else if (userPokemonSelection === `Piplup`) {
    pokemonImage.setAttribute(`src`, `/images/blackPiplup.jpg`);
}

if (computerPokemonSelection === "Phantump") {
    computerImage.setAttribute(`src`, `/images/blackPhantump.jpg`);
} else if (computerPokemonSelection === "Pancham") {
    computerImage.setAttribute(`src`, `/images/blackPancham.jpg`);
} else if (computerPokemonSelection === "Umbreon") {
    computerImage.setAttribute(`src`, `/images/blackUmbreon.jpg`);
}

for(let i = 0; i < userPlayerOptions.length; i++) {
    if(userPlayerOptions[i].name === userPokemonSelection) {
        document.getElementById("attackBtnOne").innerText = userPlayerOptions[i].attackOne;
        document.getElementById("attackBtnTwo").innerText = userPlayerOptions[i].attackTwo;
        document.getElementById("attackBtnThree").innerText = userPlayerOptions[i].attackThree;
        document.getElementById("attackBtnFour").innerText = userPlayerOptions[i].attackFour;
    }
}

// Calling the functions to print the intiial user's HP and computer's HP to the DOM right when the user enters the battle page
userHpPercentage();
computerHpPercentage();