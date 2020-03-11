/* EJS = Embedded JavaScript 

    1. NodeJS lookd for ejs file in views folder
    2. ejs files end with .ejs
    3. have to let the nodeJS engine know that you are using ejs
*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("css")); //telling nodejs to fuck with css, likewiese with any other folder. make it static so nodejs recognizes it
app.use(bodyParser.urlencoded({extended:true}));    
app.set("view engine", "ejs"); //telling nodejs to fuck with ejs

app.get("/", function(req, res){
    //res.send("HELLO WORLD");
    res.render("home");
});

var friendList = ["Alice", "Jose", "Bob", "Joe"];
app.get("/friends", function(req, res){
    res.render("friends", {friends: friendList});
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newFriend;
    friendList.push(newFriend);
    res.redirect("/friends");
   // console.log(req.body);
});

app.get("*", function(req,res){
    //res.send("Page not found");
    res.render("error");
});



app.listen(process.env.PORT, function(){
    console.log("Server is up and running");
});

