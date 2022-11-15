export function renderCharacters(character) {
    const characterEl = document.createElement('a');
    characterEl.href = `./character/?id=${character.id}`;
    characterEl.classList.add('character');

    const characterImg = document.createElement('img');
    characterImg.src = `./assets/${character.img}.png`;

    const characterName = document.createElement('p');
    characterName.textContent = character.name;

    characterEl.append(characterImg, characterName);

    return characterEl;
}

export function renderCharacterInfo(character) {
    const div = document.createElement('div');
    const characterImg = document.createElement('img');
    const characterName = document.createElement('p');
    const characterIdentity = document.createElement('p');
    const characterAbilities = document.createElement('p');
    const characterDesc = document.createElement('p');

    characterImg.src = `../assets/${character.img}.png`;
    characterName.textContent = character.name;
    characterIdentity.textContent = character.identity;
    characterAbilities.textContent = character.abilities;
    characterDesc.textContent = character.description;

    div.append(characterImg, characterName, characterIdentity, characterAbilities, characterDesc);
    return div;
}
