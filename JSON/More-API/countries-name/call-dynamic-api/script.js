const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => showCountries(data))
}
loadCountries();

const showCountries = (countries) => {
    // console.log(countries);
    const container = document.getElementById('container');
    countries.forEach(country => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('country');
        createDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital}</p>
            <button onclick = "loadDetails('${country.name.common}')">Details</button>
        `;
        container.appendChild(createDiv);
    });
};

const loadDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showDetails(data[0]))
};

const showDetails = country => {
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <p>Region: ${country.region}</p>
        <p>Sub Region: ${country.subregion}</p>
        <p>Population: ${country.population}</p>
        <p>Start of Week: ${country.startOfWeek}</p>
        <p>Status: ${country.status}</p>
        <img width="150px" src = "${country.flags.png}">
    `;
};