// load countries
const loadCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()

    displayCountries(data)
}

loadCountries();


// display countries
const displayCountries = countries => {
    const container = document.getElementById('container');

    countries.forEach(country => {
        const div = document.createElement('div');

        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;

        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = country.name.official;

        div.appendChild(p);
        container.appendChild(div);
    });
}