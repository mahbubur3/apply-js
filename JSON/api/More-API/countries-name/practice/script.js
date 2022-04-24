const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => showCountries(data))
}

loadCountries();

const showCountries = countries => {
    const countriesBody = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        countriesBody.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        countriesBody.appendChild(p);
    })
}