var data = require('../products.json');

// Write your solutions below

// THESE ARE JUST FOR REFERENCE
// console.log(data[0]); //undefined
// console.log(data.items[0]); //prints and item
// console.log(typeof data); //object
// console.log(typeof "hi"); //string
/////////////////////////////////////////////////////////////
//SOLUTION TO FIRST PROBLEM
// var count = 0;

// for (var i = 0; i < data.items.length; i++) {
//     if (data.items[i].kind = "shopping#product") {
//       count = count + 1;
//     }
// }
// console.log(count);
// This information is also found in the currentItemCount.

////////////////////////////////////////////////////////////////
//SOLUTION TO SECOND PROBLEM
// for (i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.inventories[0].availability === "backorder") {
//     console.log(data.items[i].product.title);
//   }
// }
////////////////////////////////////////////////////////////////
//SOLUTION TO THIRD PROBLEM

// for (i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.images.length > 1) {
//     console.log(data.items[i].product.title);
//   }
// }
////////////////////////////////////////////////////////////////
//SOLUTION TO FOURTH PROBLEM
// for (i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.brand === "Canon") {
//     console.log(data.items[i].product.brand);
//   }
// }
////////////////////////////////////////////////////////////////
//SOLUTION TO FIFTH PROBLEM
// for (i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.brand === "Canon" && data.items[i].product.author.name === "eBay") {
//     console.log(data.items[i].product.title);
//   }
// }
///////////////////////////////////////////////////////////////
//SOLUTION TO SIXTH PROBLEM

for (i = 0; i < data.items.length; i++) {
  console.log(data.items[i].product.brand);
  console.log(data.items[i].product.inventories[0].price);
  console.log(data.items[i].product.images[0]);
}
