const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

// const url=

//database connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yofznvf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
  console.log(`Succeeded to connect the database`.red.bold);
});

//server
const port = process.env.PORT || 8080;

// app.listen(port, () => {
//     console.log(port)
//     console.log(`App is running on prot ${port}`.yellow.bold);
//   });

