const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');
app.use(express.static('public'));

// About route
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Quiz route
app.get('/quiz', (req, res) => {
    res.render('quiz', { title: 'Quiz' });
});

app.get('/result', (req, res) => {
    res.render('result', { title: 'Result' });
})

// Home route
app.get('/', (req, res) => {
    res.render('homepage', { title: 'Home' });
});

// 404 page route
app.use((req, res) => {
    res.render('404', { title: '404' });
});

const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
