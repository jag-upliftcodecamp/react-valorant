function VendingMachine(paramSnacks) {
  this.snacks = paramSnacks;

  this.vend = function (snackIndex, cash) {
    // FIND THE SNACKS
    const snackItem = this.snacks[snackIndex];
    if (snackItem === undefined) {
      return 'Snack not found';
    }
    // if(!paramSnacks){;
    //     console.log('Snack not found');
    // } else {
    //   if item is present
    //     get item
    //     get cost
    //     cash - cost
    // }
    let snackPrice = snackItem.price;
    let snackChange = 0;

    if (snackPrice > cash) {
      return 'Your money is not enough, sorry';
    }

    snackChange = cash - snackPrice;
    const name = snackItem.name;

    return { name: name, change: snackChange };
    
      // RETURN THE ITEM with name and change

    // if cash - cost < 0,
    //   return message: "Your money is not enough, sorry"
  };
}

// TEST CASES
const snacks = [
  { name: 'Cheese Ring', price: 15 },
  { name: 'Nova', price: 12 },
  { name: 'Moby', price: 5 },
];

const vendingMachine = new VendingMachine(snacks);

console.log(vendingMachine.vend(1, 20)); // should return { name: "Nova", change: 8 }
// console.log(vendingMachine.vend(0, 20)); // should return { name: "Cheese Ring", change:  5}
// console.log(vendingMachine.vend(5, 20)); // should return "Snack not found"
// console.log(vendingMachine.vend(2, 2)); // should return "Your money is not enough, sorry"
