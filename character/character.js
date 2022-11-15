import { fetchCharacter } from '../fetch.utils.js';
import { renderCharacterInfo } from '../render.utils.js';

const detailPage = document.querySelector('#detail-page');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const character = await fetchCharacter(id);

    const characterEl = renderCharacterInfo(character);
    detailPage.append(characterEl);
});
