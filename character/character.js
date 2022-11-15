import { fetchCharacter } from '../fetch.utils.js';
import { renderCharacterInfo } from '../render.utils.js';

const characterInfo = document.querySelector('#character-info');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const character = await fetchCharacter(id);
    console.log(character);

    const characterEl = renderCharacterInfo(character);
    characterInfo.append(characterEl);
});
