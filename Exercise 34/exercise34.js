function addListItem() {
    const list = document.querySelector('#list');
    const newItem = document.createElement('li');
    newItem.textContent = 'Item 4';
    list.appendChild(newItem);
}

function removeListItem() {
    const list = document.querySelector('#list');
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}