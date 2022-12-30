
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("\music/food.mp3")
const gameOver = new Audio("\music/gameover.mp3")
const moveSound = new Audio("\music/move.mp3")
const musicSound = new Audio("\music/music.mp3")
const boardEL = document.getElementById("board")
let score = 0;
let speed = 8;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
food = { x: 6, y: 7 }; // ye array nhi h ye random object hai

//Game Function start here

const main = ((ctime) => {
    window.requestAnimationFrame(main) // good for animation rather then using setInterval for loop
    // console.log(ctime)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
})

function isCollide(snake) {
    // if you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // if you bump into the wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }

}
const gameEngine = (() => {
    // 1. Upadting the snake array and Food
    if (isCollide(snakeArr)) {
        gameOver.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
            alert("Game over. Press any key to continue!");
        snakeArr = [{ x: 13, y: 15 }];
        // musicSound.play();
        score = 0;
    }

    // if you eaten the food the increment the score and snake and change the direction of food.
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score += 1;
        if (score > hihscoreval) {
            hihscoreval = score;
            localStorage.setItem("hihscore", JSON.stringify(hihscoreval));
            highBoard.innerHTML = "Hi-Score:0" + hihscoreval;

        }
        scoreBoard.innerHTML = "score" + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y }) // unshift jo hai starting mai array k add kr deta hai.
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) } // Math.round(a+(b-a)*Math.random()) ye a to b mai se random number generate krne ka formula hai.
        foodSound.play();
    }

    // move the snake 
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] }; // agar refrence nhi ek naye object ki tarah use krna chate ho then {...//} use kro
        
    }
    
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
    // 2. Display the snake and food
    //Display the snake
    boardEL.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y; /*gridRowStart agar 15 likha tho ye 15 row se start hoga same gridColumnStart   */
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head')
        }
        else {
            snakeElement.classList.add('snake')
            
        }
        boardEL.appendChild(snakeElement)
    })
    //Display the Food

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y; /*gridRowStart agar 15 likha tho ye 15 row se start hoga same gridColumnStart   */
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    boardEL.appendChild(foodElement)

})
let hihscore = localStorage.getItem("hihscore");
if (hihscore === null) {
    hihscoreval = 0;
    localStorage.setItem("highScore", JSON.stringify(hihscoreval))
}
else {
    hihscoreval = JSON.parse(hihscore)
    highBoard.innerHTML = "Hi-Score=0" + hihscore;
}
// main logic start here
window.requestAnimationFrame(main);
window.addEventListener("keydown", e => {
    inputDir = { x: 0, y: 1 }//start the game
    musicSound.play();
    moveSound.play();
    switch (e.key) { // key se keyword k button select kr k use kr skte hai
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})