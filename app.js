const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;


//middleware
app.use(cors());
app.use(express.json());

//routes
const userRouter = require("./Routers/user.route")
const consultantRouter = require("./Routers/consultant.route")


//APi path 
app.use('/api/users', userRouter)
app.use('/api/consultantInfo',consultantRouter)

// run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Yes continue scholarships australia");
});

app.listen(port, () => {
  console.log(port)
  console.log(`App is running on prot ${port}`.yellow.bold);
});


