//import modules
const express = require("express");

//setting port default value
const PORT = process.env.PORT || 3001;
//creating exppress app
const app = express();

//middleware to parse imcoming request bodies as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//once databse is open start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
