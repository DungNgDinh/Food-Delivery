var express = require("express");
var app = express();
app.set("view engine", "ejs"); //template engine EJS tạo html
app.set(express.static("public"));
app.listen(3000);

app.get("/", function(req, res){
    res.send("Hello");
});