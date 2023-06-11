import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");


const users = []
app.post("/submit-form", (req,res) => {
    let username = req.body.name; 
    let useremail = req.body.email; 
    let usermessege = req.body.messege;
    let current_user = {username, useremail, usermessege};
    users.push(current_user);
    res.render("registration-success",{username});
})

app.get("/", (req,res)=> res.render("home"));
app.get("/registered-users", (req,res)=> res.render("registered-users", {users}));
app.get("/registration-success", (req,res)=> res.render("registration-success"));

app.listen(3000, ()=> console.log("App is running at port 3000"));