export function renderCharacters(character) {
    const characterEl = document.createElement('a');
    characterEl.classList.add('character');

    const characterImg = document.createElement('img');
    characterImg.src = `./assets/${character.img}.png`;

    const characterName = document.createElement('p');
    characterName.textContent = character.name;

    characterEl.append(characterImg, characterName);

    return characterEl;
}
