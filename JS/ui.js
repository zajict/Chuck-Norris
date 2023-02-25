//add paragraph for joke text
// in #random-joke-box

export const randomJoke = (joke) => {
    const jokeParagraph = document.querySelector('#random-joke-box');
    jokeParagraph = `<p>${
        joke.value
        }</p>`
    };

