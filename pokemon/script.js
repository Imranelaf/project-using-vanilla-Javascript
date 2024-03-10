const image = document.getElementById("poke");
const value = document.getElementById("answer");
const answerReact = document.getElementById("reacting");
let score = 0;

//choose a random pokemon from the pokemonj api
async function pokemon() {
    const random = Math.floor(Math.random() * 20) + 1;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    const pok = await data.json();
    const result = pok.forms[0].name;
    const img = pok.sprites.other.showdown.front_default;
    addimage(img);
    console.log(result);
    return result;
}
//add pokemon image to the page
function addimage(pic) {
    image.style.backgroundImage = `url(${pic})`;
}

//waiting user to enter his answer by pressing enter
async function answer() {
    return new Promise(resolve => {
        value.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const response = value.value;
                resolve(response);
            }
        });
    });
}
//change the background color based on the answer 
function reactToAnswer(color) {
    answerReact.style.backgroundColor = color;
}
 //statring the game by merging some functions
async function start() {
    const pokemonName = await pokemon();
    let i =0;
    do{
    let playerAnswer = await answer();

    if (pokemonName === playerAnswer) {
        console.log("correct");
        reactToAnswer("green");
        i=1;
    } else {
        console.log("false");
        reactToAnswer("red");
    }

    // Reset the background color after 0.3 seconds
    setTimeout(() => {
        answerReact.style.backgroundColor = "transparent";
        value.value = "";
         
    }, 300);
    }while(i==0);
    start(); // Start a new round
}

function hint(){

}

start();
