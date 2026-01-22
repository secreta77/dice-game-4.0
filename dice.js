function rollDice() {
    const num_of_dice = document.getElementById("num_of_dice").value;
    const dice_result = document.getElementById("dice_result");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

   

    for (let i = 0; i < num_of_dice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        images.push(
            `<img src="dice_images/dice${value}.png" alt="Dice ${value}" >`
        );
    }

    dice_result.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}









   