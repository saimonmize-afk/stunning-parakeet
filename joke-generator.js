const fetch = require('node-fetch');

async function getRandomJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const joke = await response.json();
    return `${joke.setup} - ${joke.punchline}`;
}

getRandomJoke()
    .then(joke => console.log(joke))
    .catch(error => console.error('Error:', error));