import './css/styles.css';
import { fetchCoutries } from './fetchCountries.js'
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const countryName = document.querySelector('.search-box');
const countryList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');

countryName.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(event) {
    event.preventDefault();
    searchCountry = event.terget.velue;
    searchCountry = searchCountry.trim();
    if (searchCountry !== '') {
        fetchCoutries(searchCountry)
            .then(renderCountryList)
            .catch(error => {
                renderCountryList('');
                Notiflix.Notify.failure('Oops, there is no country with that name');
            });
    } else renderCountryList(searchCountry);
};



 
