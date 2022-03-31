const loadCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const response = await fetch(url);
    const data = await response.json();
    displayCountries(data);
};

loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    const countriesBody = document.getElementById('countries-body');
    countries.forEach(country => { // for (const country of countries)
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countriesBody.appendChild(div);
    });
}