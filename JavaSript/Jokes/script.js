// PROMISES
/*
2condition => succ =>fet
fetch()
milega =>sab kuch sahi h
nahi milega =>inter error ,server error

fullfilled
reject

90% promise consumed na ki create krna h
promise se better async es8 hai.

*/
const jokes = document.querySelector('#joke');
const btn = document.querySelector('#jokebtn');

const generateJokes = () => {
    const setHeader = {
        headers: {
            Accept: 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json()).then((data) => {
            jokes.innerHTML = data.joke;
        }).catch((error) => {
            console.log(error);
        })
};

generateJokes();
btn.addEventListener('click', generateJokes);