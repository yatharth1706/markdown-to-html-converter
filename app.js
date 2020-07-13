/** Basic server setup */
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// static files configuration
app.use(express.static(path.join(__dirname, 'public')));

// handlebars configuration
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Routes
app.use('/', require('./routes/home'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})