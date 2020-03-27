const express = require('express');
const mongoose = require('mongoose');
const app = express();
 
mongoose.connect('mongodb://localhost:27017/fruitDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: [true, "Error: no name specified" ]
    },
    rating: {
        type: Number, 
        min: 1, 
        max: 10 
    }, 
    review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Sweet and crunchy"
});
//fruit.save();

const orange = new Fruit({
    name: "orange",
    rating: 8
});
 
orange.save();

Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        console.log(fruits);
    }
});
/*
Fruit.update({_id: "5e7df83413d7971fb0e6595e"}, {review: "Juicy fruit"}, function(error){
    if(error){
        console.log(error);
    }
    else {
        console.log("updated");
    }
});
*/

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

Person.update({name: "John Doe"}, {age: 30}, function(error){
    if(error){
        console.log(error);
    }
    else {
        console.log("updated");
    }
});


Person.find(function(error, fruits) {
    if(error){
        console.log(error);
    } 
    else {
        fruits.forEach(person => {
            console.log(person.name);
        });
    }
});

Fruit.deleteMany({name: "orange"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("deleted");
    }
});



/*
const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "Soft texture"
});
 
const lemon = new Fruit({
    name: "Lemon",
    rating: 5,
    review: "Sour as hell"
});

Fruit.insertMany([banana,lemon], (error)=>{
    if(error){
        console.log(err);
    }
    else {
        console.log('successfuly added');
    }
})



const person = new Person({
    name: "John Doe",
    age: 29
});

const person1 = new Person({
    name: "Terry Pratchett",
    age: 76
});

const person2 = new Person({
    name: "Lucas Pope",
    age: 55
});

Person.insertMany([person1,person2], (error)=>{
    if(error){
        console.log(err);
    }
    else {
        console.log('successfuly added');
    }
})

//person.save();
*/
app.listen(3000, ()=>{
    console.log("Server is Running on Port 3000");
});
