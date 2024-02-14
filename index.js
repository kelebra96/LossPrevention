const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const homeController = require('./controllers/HomeController');
app.use('/', homeController);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
