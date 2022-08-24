require('dotenv').config();

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./router/admin.js');
const shopRoutes = require('./router/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     User.findById('6300ff89bf46823b5dc7e570')
//         .then(user => {
//             req.user = new User(user.name, user.email, user.cart, user._id);
//             next();
//         })
//         .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.pageNotFound);

mongoose.connect(`mongodb+srv://cristovaofabio:${process.env.MONGO_PASSWORD}@cluster0.sio0ccb.mongodb.net/shop?retryWrites=true&w=majority`)
    .then(result => {
        console.log('Connected to database!');
        app.listen(3000);
    })
    .catch(err => console.log(err));