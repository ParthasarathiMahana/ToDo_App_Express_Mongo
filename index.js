const express = require('express');
const port = 8000;
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.get('/', function(req, res)
{
    res.render('home');
});

app.listen(port, function(err)
{
    if(err)
    {
        console.log("Error Occured While Lstening to the port", port);
        return;
    }

    console.log(`Server is up and running on port ${port}`);
});