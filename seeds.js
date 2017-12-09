var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Morbi sizzle. Dawg potenti. Its fo rizzle fo. Gangster elizzle shizzlin dizzle, ullamcorpizzle quis, ullamcorpizzle phat, scelerisque brizzle, fo shizzle my nizzle. Crunk fo shizzle dang. Break yo neck, yall felizzle. Morbi sizzle. Dawg potenti. Its fo rizzle fo. Gangster elizzle shizzlin dizzle, ullamcorpizzle quis, ullamcorpizzle phat, scelerisque brizzle, fo shizzle my nizzle. Crunk fo shizzle dang. Break yo neck, yall felizzle."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Morbi sizzle. Dawg potenti. Its fo rizzle fo. Gangster elizzle shizzlin dizzle, ullamcorpizzle quis, ullamcorpizzle phat, scelerisque brizzle, fo shizzle my nizzle. Crunk fo shizzle dang. Break yo neck, yall felizzle. Morbi sizzle. Dawg potenti. Its fo rizzle fo. Gangster elizzle shizzlin dizzle, ullamcorpizzle quis, ullamcorpizzle phat, scelerisque brizzle, fo shizzle my nizzle. Crunk fo shizzle dang. Break yo neck, yall felizzle."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Morbi sizzle. Dawg potenti. Its fo rizzle fo. Gangster elizzle shizzlin dizzle, ullamcorpizzle quis, ullamcorpizzle phat, scelerisque brizzle, fo shizzle my nizzle. Crunk fo shizzle dang. Break yo neck, yall felizzle. Morbi sizzle. Dawg potenti. Its fo rizzle fo. Gangster elizzle shizzlin dizzle, ullamcorpizzle quis, ullamcorpizzle phat, scelerisque brizzle, fo shizzle my nizzle. Crunk fo shizzle dang. Break yo neck, yall felizzle."
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            
            // Add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground!");
                        //create a comment
                        Comment.create({
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("comment added!");
                            }
                        });
                    }
                });
            });
        }   
    });
}

module.exports = seedDB;

