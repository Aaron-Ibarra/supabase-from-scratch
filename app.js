/* Imports */

import { fetchCharacters } from './fetch.utils.js';
import { renderCharacters } from './render.utils.js';

/* Get DOM Elements */
const characterList = document.querySelector('#character-list');

/* Events */
window.addEventListener('load', async () => {
    const characters = await fetchCharacters();

    for (let character of characters) {
        const currentCharacter = renderCharacters(character);
        characterList.append(currentCharacter);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
