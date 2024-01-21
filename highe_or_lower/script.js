let guess = document.getElementById("inpt");
let action = document.getElementById("btn");
let message = document.getElementById("msg");
let buttons = document.querySelectorAll(".btn");
let levelContainer = document.querySelector(".level");
let levelIs = document.getElementById("dd");
let firstdiv = document.getElementById("first");
let secondDiv = document.getElementById("second");
let counting = document.getElementById("counting");
let rand = 0;
let count =0;

// Hide the level container initially
firstdiv.hidden = false;
secondDiv.hidden = true;

// Get the difficulty that the user clicked
buttons.forEach(button =>
    button.addEventListener("click", () => {
        firstdiv.hidden = true;
        secondDiv.hidden = false;
        let level = parseInt(button.value);
        switch (level) {
            case 1:
                rand = Math.floor(Math.random() * 10) + 1;
                levelIs.innerHTML = "Enter numbre between 1 and 10";
                break;
            case 2:
                rand = Math.floor(Math.random() * 100) + 1;
                levelIs.innerHTML = "Enter numbre between 1 and 100";
                break;
            case 3:
                rand = Math.floor(Math.random() * 1000) + 1;
                levelIs.innerHTML = "Enter numbre between 1 and 1000";
                break;
        }
        console.log(rand);
        console.log(level);

        // Show the level container when a difficulty is selected
        levelContainer.hidden = false;
    })
);

// Handle the click event on the action button
action.addEventListener("click", () => {
    let val = parseInt(guess.value);
    if (isNaN(val)) {
        message.innerHTML = "Please Enter a Number";
        guess.value = "";
    } else {
        if (rand < val) {
            message.innerText = "Too High";
            guess.value = "";
            count+=1;
        } else if (rand > val) {
            message.innerText = "Too Low";
            guess.value = "";
            count+=1;
        } else {
            message.innerText = "Bingo";
            guess.value = "";
        }
    }
    counting.innerHTML = count;
});
