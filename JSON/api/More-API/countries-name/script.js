let loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

loadCountries();

let displayCountries = countries => {
    // console.log(countries);
    let countriesBody = document.getElementById('countries-body');
    countries.forEach(country => { // for (let country of countries)
        let div = document.createElement('div');
        div.classList.add('country');
        let h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        div.appendChild(h3);
        let p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countriesBody.appendChild(div);
    });
}