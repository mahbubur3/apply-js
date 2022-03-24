let loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => showQuotes(data))
};

let showQuotes = (quotes) => {
    let quoteElement = document.getElementById('quote-element');
    quoteElement.innerText = quotes.quote;
}