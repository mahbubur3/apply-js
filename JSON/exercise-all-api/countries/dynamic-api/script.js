const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => showCountries(data))
}

loadCountries();

const showCountries = (countries) => {
    const container = document.getElementById('container');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital}</p>
            <button onclick ="loadDetailsByName('${country.name.common}')">Details</button>
        `;
        container.appendChild(div);
    });
}

const loadDetailsByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data[0]))
}

const displayDetails = country => {
    const details = document.getElementById('details');
    details.innerHTML = `
        <p>${country.name.common}</p>
        <p>Region: ${country.region}</p>
        <p>Population: ${country.population}</p>
    `;
}