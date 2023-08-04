function rollDice() {
    const randomNumberD6 = Math.floor(Math.random() * 6) + 1;
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'You rolled d6: ' + randomNumberD6;
}

function rollDiceTwo() {
    const randomNumberD10 = Math.floor(Math.random() * 10) + 1;
    const resultElementTwo = document.getElementById('resultTwo');
    resultElementTwo.textContent = 'You rolled d10: ' + randomNumberD10;
}
