const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./router/admin.js');
const shopRoutes = require('./router/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);