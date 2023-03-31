let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want me to deal you a new card?";
    } else if (sum === 21) {
        message = "Congratulations you have Blackjack";
        hasBlackJack = true;
    } else {
        message = "Bust! You're out of the game";
        isAlive = false;
    };
    
    messageEl.textContent = message;
}

function newCard() {
    console.log("Dealing a new card from the deck");
}