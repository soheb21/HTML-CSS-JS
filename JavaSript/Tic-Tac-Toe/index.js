const gameoverel = new Audio("\Tic/gameover.mp3")
const musicel = new Audio("\Tic/music.mp3")
const tingel = new Audio("\Tic/ting.mp3")
const resetbtn = document.getElementById("reset");

let turn = "X";
let isgameover = false;

const changeTurn = (() => {

    return turn === "X" ? "0" : "X";
})

// function for checkwin
const checkWin = (() => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2,5,5,0],
        [3, 4, 5,5,15,0],
        [6, 7, 8,5,25,0],
        [0, 3, 6,-5,15,90],
        [1, 4, 7,5,15,90],
        [2, 5, 8,15,15,90],
        [0, 4, 8,5,15,45],
        [2, 4, 6,5,15,135],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "250px"
            document.querySelector(".line").style.width="20vw"
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            gameoverel.play();
        }

    })

})

// Main Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxtext");// element.querySelector mtlb div k class k class k andr ko select kro.
    element.addEventListener('click', () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            tingel.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                musicel.play();
            } else {
                musicel.pause();
            }
        }
    })
})

//reset the game 
resetbtn.addEventListener("click",()=>{
    musicel.pause();
    let boxText = document.querySelectorAll(".boxtext");
    Array.from(boxText).forEach(ele=>{
        ele.innerText=""
        
    })
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".line").style.width="0vw"
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px"

})