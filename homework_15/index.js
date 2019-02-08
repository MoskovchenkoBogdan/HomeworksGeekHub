const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const bodyParser = require('body-parser');

const foodScheme = new Schema({ name: String, calories: Number});
const Food = mongoose.model("Food", foodScheme);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/foods", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(8080, function(){
        console.log("Running on port 8080");
    });
});

app.get("/api/foods", function(req, res){

    res.header('Access-Control-Allow-Origin', "*");

    Food.find({}, function(err, foods){

        if(err) return console.log(err);
        res.send(foods)
    });
});

app.get("/api/foods/find/:string", function(req, res){

    const string = req.params.string;
    Food.findOne({name: string}, function(err, foods){

        if(err) return console.log(err);
        res.header('Access-Control-Allow-Origin', "*");
        res.send(foods);
    });
});

app.post("/api/foods", function (req, res) {

    if(!req.body) return res.sendStatus(400);

    const dishName = req.body.name;
    const dishCalories = req.body.calories;
    const dish = new Food({name: dishName, calories: dishCalories});

    dish.save(function(err){
        if(err) return console.log(err);
        res.send(dish);
    });
});