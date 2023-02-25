class Joke {
    constructor(icon_url, value) {
        this.icon_url = icon_url;
        this.value = value;
    };
};

export const FetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random').then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed Chuck Norris joke.');
        }
    })
    .then(res =>  res.json()).then(joke => new Joke(joke.icon_url, joke.value))
    .catch(error => console.error(error));
};