/* 
function loadQuotes() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuotes(data))
}

function displayQuotes(quotes) {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.innerText = quotes.quote;
    container.appendChild(p);
}
 */

// using arrow function
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = (quotes) => {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.innerText = quotes.quote;
    container.appendChild(p);
}