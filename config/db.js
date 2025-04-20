const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://127.0.0.1:27017/men').then(() =>{
console.log("connected to data base")
})

module.exports=connection

//to connect the database to node we use command npx nodemon app.js