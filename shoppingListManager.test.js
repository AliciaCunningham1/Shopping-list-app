// shoppingListManager.test.js

const {
    addItem,
    removeItem,
    getItems,
    clearList
} = require('./shoppingListManager');

beforeEach(() => {
    clearList();
});

describe("addItem", () => {

    test("adds a valid item", () => {
        addItem("Apples");
        expect(getItems()).toEqual(["Apples"]);
    });

    test("trims extra spaces before adding", () => {
        addItem("   Bread   ");
        expect(getItems()).toEqual(["Bread"]);
    });

    test("does not add empty strings", () => {
        addItem("");
        addItem("   ");
        expect(getItems()).toEqual([]);
    });

    test("does not add non-string values", () => {
        addItem(123);
        addItem({});
        addItem(null);
        expect(getItems()).toEqual([]);
    });
});

describe("removeItem", () => {

    test("removes item at valid index", () => {
        addItem("Milk");
        addItem("Eggs");
        removeItem(0);
        expect(getItems()).toEqual(["Eggs"]);
    });

    test("does nothing for invalid index", () => {
        addItem("Milk");
        removeItem(5);
        removeItem(-1);
        expect(getItems()).toEqual(["Milk"]);
    });
});

describe("getItems", () => {
    test("returns correct list after multiple operations", () => {
        addItem("Milk");
        addItem("Eggs");
        removeItem(0);
        addItem("Bread");
        expect(getItems()).toEqual(["Eggs", "Bread"]);
    });
});

describe("clearList", () => {
    test("empties the list", () => {
        addItem("Milk");
        addItem("Eggs");
        clearList();
        expect(getItems()).toEqual([]);
    });
});
