import './css/styles.css';
import template from './templates/template.hbs';
console.log(template);

const DEBOUNCE_DELAY = 300;

const list = document.querySelector('.country-list');
list.innerHTML = template('Ukraine');
