//dependencies
const express = require("express");
const path = require("path");

//set up express
const app = express();
const PORT = 8080;

//set up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require("./app/routing/apiRoutes")(app);
//require("./app/routing/htmlRoutes")(app);

//let server = express.createServer(handleRequest);

app.listen(PORT, function() {
    console.log("Listening on: http://localhost:" + PORT);
});
