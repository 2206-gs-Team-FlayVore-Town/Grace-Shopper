"use strict";

const {
  db,
  models: { User, Product, Order },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");
  console.log(User, Product, Order)

  // Creating Users
  const users = await Promise.all([
    User.create({ firstName: "cody", lastName: "Zotaniferd", password: "123", email: "cody@email.com" }),
    User.create({ firstName: "murphy", lastName: "Chablancy", password: "123", email: "murphy@email.com"}),
  ]);
  
  const products=[]
  let name1 = ["Human", "Orc", "Elven", "Catperson", "Goblin", "Dwarven", "Giant", "Dragonborn", "Gnome", "Lizardfolk", "Angel", "Demon"];
  let name2 = ["Fighter", "Paladin", "Knight", "Monk", "Barbarian", "Wizard", "Sorceror", "Cleric", "Druid", "Warlock"]
  let company = ["Games Workshop", "Reaper Minis", "Wizards of the Coast", "Hero Forge", "Dwarven Forge", "Miniature Market"]
  for (let i = 0; i < 50; i++) {
    let rand1 = Math.floor(Math.random()*12);
    let rand2 = Math.floor(Math.random()*10);
    let rand3 = Math.floor(Math.random()*6);
    let rand4 = Math.floor(Math.random()*25);
    let rand5 = Math.floor(Math.random()*50);
    const newMini = { 
      name: `${name1[rand1]} ${name2[rand2]}`, 
      price: rand1 + rand2 + rand3 + rand4,
      imgURL: "https://i.ebayimg.com/images/g/jEsAAOSwjoZfTr8e/s-l500.jpg",
      quantityPerItem: 1, 
      specifications: `This is a ${name1[rand1]} ${name2[rand2]} made by ${company[rand3]}. Neat!`, 
      rating: rand5,
      company: company[rand3],
      stock: rand1 + rand2
    }
    products.push(newMini);
  }

  let creature = ["Lion", "Tiger", "Bear", "Dog", "Cat", "Dragon", "Gorilla", "Slime Monster", "Ooze Monster", "Werewolf", "Owlbear", "Hellhound", "Beholder", "Demogorgon", "Aboleth", "Kraken", "Giant Rat", "Giant Centipede", "Elemental", "Raptor"];
  for (let i = 0; i < 50; i++) {
    let rand1 = Math.floor(Math.random()*20);
    let rand3 = Math.floor(Math.random()*6);
    let rand4 = Math.floor(Math.random()*25);
    let rand5 = Math.floor(Math.random()*50);
    const newMini = { 
      name: `${creature[rand1]}`, 
      price: rand1  + rand3 + rand4 + rand5,
      imgUrl: "https://i.etsystatic.com/9213904/r/il/3ae16d/3502796087/il_1588xN.3502796087_pwb1.jpg",
      quantityPerItem: 1, 
      specifications: `This is a ${creature[rand1]} made by ${company[rand3]}. Neat!`, 
      rating: rand5,
      company: company[rand3],
      stock: rand1 + rand3
    }
    products.push(newMini);
  }


  products.map(item => Product.create(item))
  
  const orders = await Promise.all([
    Order.create()
  ]);

  await orders[0].setUser(users[0])
  
  await orders[0].addProduct(products[0], {through: {quantity: 1, unitPrice: 500, totalPrice: 1 * 500}})

  console.log(`seeded ${users.length} users, ${products.length} products, ${orders.length} orders`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
