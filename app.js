const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require("./controllers/error")
const sequelize = require("./util/database")

const app = express();


// importando uma template engine nao built-in
// const { engine } = require("express-handlebars")
// app.engine("hbs", engine({ extname: "hbs", layoutsDir: "views/layouts/" }))
// app.set("view engine", "hbs")

app.set("view engine", "ejs")
// so por explicidade
app.set("views", "views")

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

a = (async ()=> {await sequelize.sync()
.then(
    result => {
        console.log(result)
        app.listen(3000);
    }
)
.catch(
    err => {console.log(err)}
)})()




