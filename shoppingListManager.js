// shoppingListManager.js

let shoppingList = [];

function addItem(item) {
    if (typeof item !== 'string') return;
    const trimmed = item.trim();
    if (!trimmed) return;
    shoppingList.push(trimmed);
}

function removeItem(index) {
    if (typeof index !== 'number') return;
    if (index < 0 || index >= shoppingList.length) return;
    shoppingList.splice(index, 1);
}

function getItems() {
    return shoppingList;
}

function clearList() {
    shoppingList = [];
}

module.exports = {
    addItem,
    removeItem,
    getItems,
    clearList
};
