// Getting the value of cookies based on the user's pokemon selection
var userPokemonSelection = Cookies.get(`selection`);
var computerPokemonSelection = Cookies.get(`computerPokemon`)

// Getting the values of the user's and computer's Max Health
var userMaxHealth = Cookies.get(`userMaxHealth`);
var computerMaxHealth = Cookies.get(`computerMaxHealth`);

// Printing the name of the user's pokemon to the DOM
var userPokemonName = document.getElementById(`userPokemonName`);
userPokemonName.append(userPokemonSelection);
userPokemonName.style.color = `white`;
userPokemonName.style.textTransform = `uppercase`;
userPokemonName.style.marginBottom = `5vh`;

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

// Getting the user's current health cookies and printing it to the DOM, styling the user's health points, styling the printed health points
var userCurrentHealth = Cookies.get(`userCurrentHealth`);
// var userCurrentHP = document.createElement(`p`);
// userCurrentHP.innerText = `${userCurrentHealth}/${userMaxHealth}`;

var userCurrentHP = document.getElementById(`userHealthBarFill`);
// userCurrentHP.style.width = `100%`;

// userCurrentHP.style.color = `#222831`;
// userCurrentHP.style.marginTop = `5vh`;
// document.getElementById(`userPokemon`).append(userCurrentHP);

// Getting the computer's current health cookies and printing it to the DOM, styling the user's health points
var computerCurrentHealth = Cookies.get(`computerCurrentHealth`);
var computerCurrentHP = document.createElement(`p`);
computerCurrentHP.innerText = `${computerCurrentHealth}/${computerMaxHealth}`;
computerCurrentHP.style.color = `#222831`;
computerCurrentHP.style.marginTop = `5vh`;
document.getElementById(`computerPokemon`).append(computerCurrentHP);

// ------------------------------ *Note: Shawn helped me with how to end the game ------------------------------

// Creating a new variable and assigning a boolean value which states that the game is not over
var gameOver = false;

// When the user clicks on the 'attack' button, the following events occurs:
function attackEnemy(userDamage, computerDamage) {
    // #1 - Setting the pokemon battle to be not over
    if(gameOver === false) {
        // #2 - The user first attacks the computer
        // Checking to see if the computer is still "alive" and has an HP above 0 and if it is, substract 200 from its HP
        // Updating the computer's HP cookie and printing the new computer's HP to the DOM
        if(computerCurrentHealth > 0) {
            computerCurrentHealth -= userDamage;
            Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
            computerCurrentHP.innerText = `${computerCurrentHealth}/${computerMaxHealth}`;
        }

        // #3 - Checking to see if the computer "died" and has an HP of 0 or below and if it is, then set the computer's HP to 0
        // Updating the computer's HP cookie and printing the new computer's HP to the DOM
        // Printing that the user's pokemon has won and setting the game to be over
        if(computerCurrentHealth <= 0) {
            computerCurrentHealth = 0;
            Cookies.set(`computerCurrentHealth`, computerCurrentHealth);
            computerCurrentHP.innerText = `${computerCurrentHealth}/${userMaxHealth}`;
            var winnerMessage = `<h1>${userPokemonSelection} Wins!</h1>`;
            document.getElementById(`battleMessages`).innerHTML = winnerMessage;
            gameOver = true;
        }

        // #4 - The computer attacks the user
        // Checking to see if the user is still "alive" and has an HP above 0 and if it is, substract 100 from its HP
        // Updating the computer's HP cookie and printing the new computer's HP to the DOM
        if(userCurrentHealth > 0) {
            userCurrentHealth -= computerDamage;
            Cookies.set(`userCurrentHealth`, userCurrentHealth);
            // userCurrentHP.innerText = `${userCurrentHealth}/${userMaxHealth}`;
            var userPercentage = (userCurrentHealth / userMaxHealth) * 100;
            userCurrentHP.style.width = `${userPercentage}%`;
            document.getElementById(`userHealthPercentage`).innerText = userPercentage;
        }

        // #5 - Checking to see if the user "died" and has an HP of 0 or below and if it is, then set the user's HP to 0
        // Updating the computer's HP cookie and printing the new computer's HP to the DOM
        // Printing that the computer's pokemon has won and setting the game to be over
        if(userCurrentHealth <= 0) {
            userCurrentHealth = 0;
            Cookies.set(`userCurrentHealth`, userCurrentHealth);
            userCurrentHP.innerText = `${userCurrentHealth}/${userMaxHealth}`;
            var winnerMessage = `<h1>${computerPokemonSelection} Wins!</h1>`;
            document.getElementById(`battleMessages`).innerHTML = winnerMessage;
            gameOver = true;
        }
    }
}

// ---------- *Note: These are just notes for myself to look back on and further comments on the events from above ----------

// --- THE "IF" STATEMENTS ---
// The reason why #2 - #5 are all "if" statements and not "if, else if, else" blocks was 
// because we wanted to be able to check all conditions i.e., whether the computer or user 
// was "dead" or had enough HP to still "do damage" (as stated in the assignment)
// If the player is "alive", keep "doing damage" to the other player.
// If the player is "dead", end the game because the winner has been declared and the player already "died".

// --- THE ISSUE ---
// I originally had it in an "if, else if" block, however, when using an "if, else if" block only one statement can be true 
// but again, we want both conditions to be checked not just one of them.
// When using the "if, else if" block, I had an issue where the computer's HP was 0/1000, 
// no winner message was printed to the DOM and the user's HP was 500/1000.
// I had to click one more time to have the winner message show up and the user HP was 400/1000
// but I wanted it to show up right when the computer's HP was at 0/1000.

// --- THE REASON ---
// The reason that happened was because let's say the user clicks 'attack' multiple times where the computer's HP reached 200/1000.
// When the computer's HP was 200, it went through the "if" statement: if(computerCurrentHealth > 0), subtract 200 from it's HP
// and it stop there since the statement was true but it didn't check whether the computer's HP was 0 
// or in other words, it didn't go to the "else if" block but the computer's HP was already at 0/1000 while the user's HP was at 500/1000.
// So when I click on the "attack" button one more time, the computer's HP was still 0/1000, the user HP was at 400/1000 and the winner message printed
// or in other words, it went through the "if else" block and checked whether it was actually
// less than or equal to 0 and proceeded with executing the statements

// --- THE SOLUTION/RESULT ---
// Now that I've created each condition in an "if" block, when the user clicks "attack" all conditions will be checked
// and as soon as the user or computer has "died", the user's or computer's HP does not decrease further and the 
// winner message printed to the DOM