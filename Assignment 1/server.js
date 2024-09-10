const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const app = express();
const PORT = 3000;

// Set up view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }))

// Middleware for parsing JSON request bodies
app.use(express.json());

// Serve static files
app.use(express.static('public'));

const movies = [
    {title:"Remember the Titans",stars:"Denzel Washington, Will Patton, Wood Harris, Ryan Hurst",director:"Boaz Yakin"},
    {title:"Star Wars: Phantom Menace",stars:"Ewan McGregor, Liam Neeson, Natalie Portman",director:"George Lucas"},
    {title:"The ShawShank Redemption",stars: 'Tim Robbins, Morgan Freeman',director: 'Frank Darabont' },
    {title:'The Godfather',stars: 'Marlon Brando, Al Pacino',director: 'Francis Ford Coppola' },
    {title:"Talladega Nights: The Ballad of Ricky Bobby",stars:"Will Ferrell, John C. Reilly, Sacha Baron Cohen",director:"Adam McKay"},
    {title:"Little Giants",stars:"Rick Moranis, Ed O'Neill, Shawna Waldron",director:"Duwayne Dunham"},
    {title:"Star Wars: Revenge of the Sith",stars:"Ewan McGregor, Hayden Christensen, Natalie Portman",director:"George Lucas"},
    {title:"Cars",stars:"Owen Wilson, Larry the Cable Guy, Paul Newman",director:"John Lasseter, Joe Ranft"},
    {title:"The Other Guys",stars:"Will Ferrell, Mark Wahlberg",director:"Adam McKay"},
    {title:"Rush",stars:"Daniel Bruhl, Chris Hemsworth, Olivia Wilde",director:"Ron Howard"}
  ];

  const user = 'Eli';

  const PawPrint = "emwcd7";

// Define routes
app.get('/', (req, res) => {
  res.render('home.ejs', { PawPrint });
});

app.get('/about', (req, res) => {
  res.render('about.ejs', { user });
});

app.get('/movies', (req, res) => {
  res.render('movies.ejs', {
    movies: movies
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});