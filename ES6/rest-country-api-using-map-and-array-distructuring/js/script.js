// load API
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

// show on UI
const displayCountries = countries => {
    // console.log(countries[0]);
    const container = document.querySelector('#container');
    const countryHtml = countries.map(country => getCountryHtml(country));
    container.innerHTML = countryHtml.join(' ');
}

// get html code
const getCountryHtml = country => {
    const { name, capital, population, flags } = country;
    const { common } = name;
    const { png } = flags;
    return `
        <div class="country">
            <h3>Name: ${common}</h3>
            <h3>Capital: ${capital}</h3>
            <h3>Population: ${population}</h3>
            <img width=200px src="${png}">
        </div>
    `;
}

// call the function
loadCountries();