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

  const users = []
  let first = ["Jimothy", "Bobert", "Billiam", "Humphrey", "Timbo", "Clintus", "Cleaton", "Danuel", "Georbert", "Tedrick", "Bamantha", "Stepherly", "Hannie", "Savannabelle", "Bethalina", "Charlia", "Layzel", "Sophelope", "Lemma", "Larper"]
  let last = ["Hawkins", "Strickland", "Romero", "Austin", "Thomas", "Love", "Taylor", "Mejia", "Palmer", "Alexander", "Jimenez", "Mann", "Wise", "Watson", "Osborne", "Thornton", "Gardner", "Khan", "Joyce", "Fuller", "Reed", "Kaye", "Reynolds", "Rossi", "Black"]
  for (let i = 0; i < 200; i++) {
    let rand1 = Math.floor(Math.random()*20);
    let rand2 = Math.floor(Math.random()*25);
    let rand3 = (rand1 % 10 === 0);
    let rand4 = Math.floor(Math.random()*25);
    let rand5 = Math.floor(Math.random()*50);
    let rand6 = Math.floor(Math.random()*12);
    const newUser = { 
      firstName: `${first[rand1]}`,
      lastName: `${last[rand2]}`,
      admin: rand3,
      email: `${first[rand1]}${last[rand2]}${100-rand5}@Testmail.com`,
      password: `password${100-rand5}`,
      addressStreet: `${rand5} ${last[rand2]} St.`,
      addressCity: `${last[rand2]}ville`,
      addressState: "Georgia",
      addressCountry: "United States",
      addressZip: 23300 + rand4,
      sellerRating: rand5,
      ccName: `${first[rand1]} ${last[rand2]}`,
      ccNumber: 4000111122220000+rand5,
      ccSecurityCode: 100 + rand5,
      ccExpiryMonth: rand6,
      ccExpiryYear: 20 + rand6,
      ccPostalCode: 23300 + rand4,
    }
    users.push(newUser);
  }


  const products=[]
  let name1 = ["Human", "Orc", "Elven", "Kittenfolk", "Goblin", "Dwarven", "Giant", "Dragonborn", "Gnome", "Lizardfolk", "Angel", "Demon"];
  let name2 = ["Fighter", "Paladin", "Knight", "Monk", "Barbarian", "Wizard", "Sorceror", "Cleric", "Druid", "Warlock"]
  let company = ["Games Workshop", "Reaper Minis", "Wizards of the Coast", "Hero Forge", "Dwarven Forge", "Miniature Market"]
  for (let i = 0; i < 100; i++) {
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
  for (let i = 0; i < 100; i++) {
    let rand1 = Math.floor(Math.random()*20);
    let rand3 = Math.floor(Math.random()*6);
    let rand4 = Math.floor(Math.random()*25);
    let rand5 = Math.floor(Math.random()*50);
    const newMini = { 
      name: `${creature[rand1]}`, 
      price: rand1  + rand3 + rand4 + rand5,
      imgURL: "https://www.furryandthebeast.com/wp-content/uploads/howler-large-dnd-monster.jpg",
      quantityPerItem: 1, 
      specifications: `This is a ${creature[rand1]} made by ${company[rand3]}. Neat!`, 
      rating: rand5,
      company: company[rand3],
      stock: rand1 + rand3
    }
    products.push(newMini);
  }

  const orders = await Promise.all([
    Order.create()
  ]);

  try {
    await Promise.all(
      products.map(item => Product.create(item))
      )
    await Promise.all(
      users.map(user => User.create(user))
      )
  } catch (err) {
    console.log(err);
  }



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
