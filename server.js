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
    const indexParam = req.params.index;
    const indexInt = parseInt(indexParam);
    
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    

    res.send(`Hello there and welcome, ${req.params.username}!`);
  });

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
  