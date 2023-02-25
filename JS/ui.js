//add paragraph for joke text
// in #random-joke-box

export const randomJoke = (joke) => {
    const jokeParagraph = document.querySelector('#random-joke-box');
    let paragraph = `<p id="joke">${
        joke.value
        }</p>`
        jokeParagraph.innerHTML = paragraph;
    };

