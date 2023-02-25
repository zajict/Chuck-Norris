import {fetchJoke} from "./data.js";
import {randomJoke} from "./ui.js"

const button = document.querySelector("button");

window.onload = function () {
    fetchJoke().then(joke => randomJoke(joke));
};

const newJoke = () => {
    fetchJoke().then((joke) => {
        randomJoke(joke)
    });
};

button.addEventListener('click', newJoke);
