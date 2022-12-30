const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
// const secondaryEl = document.getElementById("secondary-btn");

let storedAnswer;
let score = localStorage.getItem("score");
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
// console.log('randomNumber',randomNumber(20,25));

const generateQuestion = () => {
    const randomNumber1 = randomNumber(1, 10);
    const randomNumber2 = randomNumber(1, 10);
    const questionType = randomNumber(1, 4);

    let firstnum;
    let secondnum;
    if (randomNumber1 > randomNumber2 && questionType>1) {
        firstnum = randomNumber1;
        secondnum = randomNumber2;
    } else {
        firstnum = randomNumber2
        secondnum = randomNumber1
    }

    let question;
    let answer;

    switch (questionType) {
        case 1:
            question = `Q. What is ${firstnum} Add to ${secondnum} ?`
            answer = firstnum + secondnum;
            break;
        case 2:
            question = `Q. What is ${firstnum} Substrat from ${secondnum} ?`
            answer = firstnum - secondnum;
            break;
        case 3:
            question = `Q. What is ${firstnum} multiply by ${secondnum} ?`
            answer = firstnum * secondnum;
            break;
            
        case 4:
            question = `Q. What is ${firstnum} Divide by ${secondnum} ?`
            answer = firstnum / secondnum;
            break;

    }
    return { question, answer }
};
const showQuestion = () => {
    const { question, answer } = generateQuestion();
    questionEl.innerText = question
    scoreEl.innerText=score
    storedAnswer = answer;
}
showQuestion();
const checkAns = (event) => {
    event.preventDefault();
    const formData = new FormData(questionFormEl);

    // const userAnsawer = parseInt(formData.get("answer"));
    const userAnsawer = +formData.get("answer");

    if (userAnsawer === storedAnswer) {
        score += 1;
        Toastify({
            text: `Your Score is ${score}`,
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            // close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            // stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    else {
        score -= 1;
        Toastify({
            text: `You are Wrong and your score is ${score}`,
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            // close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            // stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #e33217, #ff001e)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          
    }
    // const resetbtn =()=>{
    //     event.target.reset();
    // }
   
    // secondaryEl.onclick(resetbtn);
    scoreEl.innerText = score;
    localStorage.setItem("score",score);
    event.target.reset();
    showQuestion();
    console.log("userAnsawer", userAnsawer);

};
