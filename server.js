const express = require('express');
const app = express();

const session = require('express-session');
app.use(express.static('assets'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');


app.use(session({
    secret: '196A9371-F1E1-4C4D-938A-F381F61919E6',  
    saveUninitialized: true,
    resave: true
}));

app.get('/', (req, res) => {
    const users = req.session.users || [];
    res.render('startPage', { title: 'Start page', users: users, script: '/js/startPage.js' });
});

app.get('/gamePage', (req, res) => {
    res.render('gamePage', { title: 'Game Page', script: 'startPage.js' });
});

app.put('/', (req, res) => {
    const username = req.body.username;
    if (username) {
        if (!req.session.users) {
            req.session.users = [];
        }
        req.session.users.push(username);
        res.json(req.session.users);
    }
});

app.listen(8000, () => { console.log('Listening on port 8000'); });
