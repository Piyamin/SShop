const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const profileRouter = require('./routes/profile');

app.use(bodyparser.urlencoded({extended: false}));

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use('/profile', profileRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);