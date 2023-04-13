//these items should be changed to a select statement from the database
//where we select all the items of this database in the same form below

const itemsArray = [
  {
    id: "price_1Mw8XAFnHtpyV359sLrPtNSy",
    name: "Coffee",
    price: 4.99,
    about: "about this item ....",
    img: "../src/assets/images/menu/item9.jfif",
  },
  {
    id: "price_1Mw8YzFnHtpyV359sguXszEC",
    name: "Water",
    price: 1.99,
    about: "about this item ...",
    img: "../src/assets/images/menu/item15.jfif",
  },
  {
    id: "price_1Mw8ZwFnHtpyV359qMcqorOl",
    name: "Chips",
    price: 6.99,
    about: "about this item ... ",
    img: "../src/assets/images/menu/item17.jfif",
  },
  {
    id: "price_1Mw8ZwFnHtpyV359qMcqorOl",
    name: "Chips",
    price: 6.99,
    about: "about this item....",
    img: "../src/assets/images/menu/item17.jfif",
  },
  {
    id: "price_1Mw8ZwFnHtpyV359qMcqorOl",
    name: "Chips",
    price: 6.99,
    about: "about this item ... ",
    img: "../src/assets/images/menu/item17.jfif",
  },
];

function getItemData(id) {
  let itemData = itemsArray.find((item) => item.id === id);

  if (itemData == undefined) {
    console.log("Item data does not exist for ID: " + id);
    return undefined;
  }

  return itemData;
}

export { itemsArray, getItemData };
