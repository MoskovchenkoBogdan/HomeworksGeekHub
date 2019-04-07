const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/public"));


app.use("/warehouse", function(request, response) {
    response.sendFile(__dirname + "/public/warehouse.html");

});

app.listen(3000);