const menu = [
  { id: 1, name: 'Adobo', price: 250 },
  // 1️⃣ Fill up the menu
  { id: 2, name: 'Sinigang na Baboy', price: 300 },
  { id: 3, name: 'Lechon Kawali', price: 350 },
  { id: 4, name: 'Kare-Kare', price: 400 },
  { id: 5, name: 'Pancit Canton', price: 200 },
  { id: 6, name: 'Chicken Inasal', price: 250 },
  { id: 7, name: 'Bicol Express', price: 280 },
  { id: 8, name: 'Halo-Halo', price: 150 },
  { id: 9, name: 'Lumpiang Shanghai', price: 180 },
  { id: 10, name: 'Bulalo', price: 350 },
];

// 🛒 Shopping Cart
const cart = []; // 🚫 DO NOT DELETE THIS LINE 🚫

function addItemToCart(paramId) {
  // 2️⃣ Implement the add to cart
  let searchMenuItem = menu.find(function (menuItem) {
    return menuItem.id === paramId;
  })

  console.log('SEARCH MENU ITEM:', searchMenuItem);

  if (searchMenuItem) {
    cart.push(searchMenuItem);
  } else {
    console.log('null');
  }
}

addItemToCart(33);
console.log('ALL CART ITEMS: ', cart);

// FOR MARK
function removeItemFromCart(id) {
  // 3️⃣ Implement the remove to cart
  
}

// FOR MARK
function placeOrder() {
  // 4️⃣ Implement the place order
}


for (let i = 0; i < 10;)