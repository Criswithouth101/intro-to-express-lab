// Import Express
const express = require('express')

// Create an Express app
const app = express()

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there and welcome, ${req.params.username}!`);
  });

  app.get('/roll/:number', (req, res) => {
    const numberParam = req.params.number;
    const numberInt = parseInt(numberParam);

    if (Number.isNaN(numberInt)) {
        return res.send('You must specify a number.');
    }

    const rolled = Math.floor(Math.random() * (numberInt + 1));

    res.send(`You rolled a ${rolled}!`);
  });

  app.get('/collectibles/:index', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
      const indexParam = req.params.index;
      const indexInt = parseInt(indexParam);

      if (Number.isNaN(indexInt) || indexInt > 0 || indexInt >= collectibles.length ) {
        return res.send('This item is not yet in stock. Check back soon!');
      } else { 
        const selected = collectibles[indexInt];
        res.send(`so, you want the ${selected.name}? for ${selected.price}, it can be yours!`); }
  });

  app.get('/shoes', (req, res) => {
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
    const minPrice = parseFloat(req.query['min-price']);
    const maxPrice = parseFloat(req.query['max-price']);
    const type = req.query.type;

    let filteredShoes = shoes;

    if (!Number.isNaN(minPrice)) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }
  
    if (!Number.isNaN(maxPrice)) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }
  
    if (type) {
      filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
  
    res.json(filteredShoes);
});

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
  