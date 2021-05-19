// Getting the values of all user cookies based on the user's pokemon selection, max health and current health
var userPokemonSelection = Cookies.get(`userPokemonSelection`);
var userMaxHealth = Cookies.get(`userMaxHealth`);
var userCurrentHealth = Cookies.get(`userCurrentHealth`);

// Getting the values of all computer cookies based on the computer's pokemon selection, max health and current health
var computerPokemonSelection = Cookies.get(`computerPokemonSelection`);
var computerMaxHealth = Cookies.get(`computerMaxHealth`);
var computerCurrentHealth = Cookies.get(`computerCurrentHealth`);

// Creating new variables that stores the user's and computer's object representation of their health bar
// This will be used to manipulate the amount of HP the user and computer has
var userCurrentHP = document.getElementById(`userHealthBarFill`);
var computerCurrentHP = document.getElementById(`computerHealthBarFill`);

// Printing the name of the user's pokemon to the DOM, styling the text
var userPokemonName = document.getElementById(`userPokemonName`);
userPokemonName.append(userPokemonSelection);
userPokemonName.style.color = `white`;
userPokemonName.style.textTransform = `uppercase`;
userPokemonName.style.marginBottom = `5vh`;

// Printing the name of the computer's pokemon to the DOM, styling the text
var computerPokemonName = document.getElementById(`computerPokemonName`);
computerPokemonName.append(computerPokemonSelection);
computerPokemonName.style.color = `white`;
computerPokemonName.style.textTransform = `uppercase`;

// Creating a new image tag, styling the images, appending the images into a div container called 'userPokemonImage'
pokemonImage = document.createElement(`img`);
pokemonImage.style.width = `100%`;
pokemonImage.style.transform = `scaleX(-1)`;
document.getElementById(`userPokemonImage`).append(pokemonImage);
document.getElementById(`userPokemonImage`).style.width = `15vw`;

computerImage = document.createElement(`img`);
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

// Creating a conditional that prints the image of the pokemon based on the user's selection to the DOM
if (userPokemonSelection === `Turtwig`) {
    pokemonImage.setAttribute(`src`, `/images/blackTurtwig.jpg`);
} else if (userPokemonSelection === `Charmander`) {
    pokemonImage.setAttribute(`src`, `/images/blackCharmander.jpg`);
} else if (userPokemonSelection === `Piplup`) {
    pokemonImage.setAttribute(`src`, `/images/blackPiplup.jpg`);
}

var gameOver = false;

function userHpPercentage() {
    var userPercentage = Math.floor((userCurrentHealth / userMaxHealth) * 100);
    userCurrentHP.style.width = `${userPercentage}%`;
    document.getElementById(`userHealthPercentage`).innerText = `${userPercentage}%`;
    if(userPercentage <= 50) {
        userCurrentHP.style.background = `#EEE8A9`;
    }
    
    if(userPercentage <= 30) {
        userCurrentHP.style.background = `#B46569`;
    }
}

function computerHpPercentage() {
    var computerPercentage = Math.floor((computerCurrentHealth / computerMaxHealth) * 100);
    computerCurrentHP.style.width = `${computerPercentage}%`;
    document.getElementById(`computerHealthPercentage`).innerText = `${computerPercentage}%`;
    if(computerPercentage <= 50) {
        computerCurrentHP.style.background = `#EEE8A9`;
    }
    
    if(computerPercentage <= 30) {
        computerCurrentHP.style.background = `#B46569`;
    }
}

function checkUserHealth() {

    let userDamage = Math.floor(Math.random() * 100);

    if(computerCurrentHealth > 0) {
        computerCurrentHealth -= userDamage;
        Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
        computerHpPercentage();
    }

    if(computerCurrentHealth <= 0) {
        computerCurrentHealth = 0;
        Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
        computerHpPercentage();
        var winnerMessage = `<h1>${userPokemonSelection} Wins</h1>`;
        document.getElementById(`battleMessages`).innerHTML = winnerMessage;
        gameOver = true;
    }
}

function checkComputerHealth() {

    let computerDamage = Math.floor(Math.random() * 100);

    if(userCurrentHealth > 0) {
        userCurrentHealth -= computerDamage;
        Cookies.set(`userCurrentHealth`, userCurrentHealth);
        userHpPercentage();
    }

    if(userCurrentHealth <= 0) {
        userCurrentHealth = 0;
        Cookies.set(`userCurrentHealth`, userCurrentHealth);
        userHpPercentage();
        var winnerMessage = `<h1>${computerPokemonSelection} Wins</h1>`;
        document.getElementById(`battleMessages`).innerHTML = winnerMessage;
        gameOver = true;
    }
}

function attackEnemy() {

    if(gameOver === false) {
        checkUserHealth();
        checkComputerHealth();
    }
}

let userAttackButton = document.getElementById(`attackButton`);
userAttackButton.addEventListener(`click`, attackEnemy);

// Calling the functions to print the intiial user's HP and computer's HP to the DOM right when the user enters the battle page
userHpPercentage();
computerHpPercentage();

// ---------- Note: These are just notes for myself to look back on and further comments on the events from above ----------

// --- THE "IF" STATEMENTS ---
// The reason why #2 - #5 are all "if" statements and not "if, else if, else" blocks was 
// because we wanted to be able to check all conditions i.e., whether the computer or user 
// was "dead" or had enough HP to still "do damage" (as stated in the assignment)
// If the player is "alive", keep "doing damage" to its opponent.
// If the player is "dead", end the game because the winner has been declared and the player already "died".

// --- THE ISSUE ---
// I originally had it in an "if, else if" block, however, when using an "if, else if" block only one statement can be true 
// but again, we want both conditions to be checked not just one of them.
// When using the "if, else if" block, I had an issue where the computer's HP was 0/1000, 
// no winner message was printed to the DOM and the user's HP was 500/1000.
// I had to click one more time to have the winner message show up and the user HP was 400/1000
// but I wanted it to show up right when the computer's HP was at 0/1000.

// --- THE REASON ---
// The reason that happened was because let's say the user clicks "attack" multiple times where the computer's HP reached 200/1000.
// When the computer's HP was 200, it went through the "if" statement: if(computerCurrentHealth > 0), subtracted 200 from it's HP
// and then stopped there since the statement was true but it didn't check whether the computer's HP was 0 
// or in other words, it wasn't going to the "else if" block but the computer's HP was already at 0/1000 while the user's HP was at 500/1000.
// So when I clicked on the "attack" button again, the computer's HP was still 0/1000 but the user HP was at 400/1000 and the winner message printed
// or in other words, at that time, it went through the "if else" block and checked whether it was actually
// less than or equal to 0 and proceeded with executing the following statements

// --- THE RESULT ---
// Now that I've created each condition in an "if" block, when the user clicks "attack" all conditions will be checked one at a time from top to bottom
// and as soon as the user or computer has "died", the user's or computer's HP does not decrease further and the 
// winner message is printed to the DOM right when either the user's or computer's HP is equal to 0