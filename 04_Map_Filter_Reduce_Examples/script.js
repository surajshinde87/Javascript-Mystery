// 1. Map
// map() => Transform each item	 => Formatting API data, rendering UI
const users = [
  {
    firstName: "Suraj",
    lastName: "Shinde",
    active: true,
    cart: [
      { item: "Shoes", price: 1000 },
      { item: "Jeans", price: 2000 },
    ],
  },
  {
    firstName: "Amit",
    lastName: "Patil",
    active: false,
    cart: [
      { item: "Shoes", price: 500 },
      { item: "Tshirt", price: 3000 },
    ],
  },
  { firstName: "Rushi", lastName: "Unge", active: true },
  { firstName: "Yash", lastName: "Deshmukh", active: true },
  { firstName: "Raj", lastName: "Patil", active: false },
];

users.map((user)=>{
    console.log(`The First Name of the User is ${user.firstName}`);
    console.log(`The Last Name of the User is ${user.lastName}`);

})

// 2. Filter
// filter() =>	Keep some items	Search results, active users

users.filter((item) => {
  if (item.active) {
    console.log(`${item.firstName} is active user`);
  }else{
   console.log(`${item.firstName} is Not active user`);
  }
});

// 3.Reduce
// reduce()	=> Collapse to one value => Cart totals, summaries, grouping
function getUserCartTotal(firstName) {
  const user = users.find(u => u.firstName === firstName);
  
  if (!user) {
    console.log("User not found");
    return 0;
  }

  if (user.hasOwnProperty("cart")) {
    const total = user.cart.reduce((sum, item) => sum + item.price, 0);
  console.log(`${firstName}'s total cart price is ₹${total}`);
  return total;
  }else{
    console.log(`Item not Found in ${firstName}'s Cart`);
    
  }
  
}


getUserCartTotal("Suraj"); 
getUserCartTotal("Amit");  
getUserCartTotal("Rushi");  