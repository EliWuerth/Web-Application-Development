const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const app = express();
const PORT = 3000;

// Set up view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('Css', __dirname + '/Css');
app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }))

// Middleware for parsing JSON request bodies
app.use(express.json());

// Serve static files
app.use('/Css',express.static(__dirname + '/Css'));

// Define routes
app.get('/', (req, res) => {
  res.render('ThreeColumns.ejs');
});

app.get('/lounge', (req, res) => {
  res.render('lounge');
});

app.get('/styledform', (req, res) => {
  res.render('styledform.ejs');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});