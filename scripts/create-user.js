const User = require("../models/user");

User.create({name: "Luam", email: "luam@luam.net.br"})
.then(result=>console.log(result))
.catch(err=>console.log(err));