const express = require('express');
const port = 8000;
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static("assets"));
app.use(express.urlencoded());

// dummy data to display
var todo_list = [
    {
        description:"Express app",
        category:"work",
        due_date:"14/4/2023"
    }
];


app.get('/', function(req, res)
{
    res.render('home', {
        todo_list: todo_list
    });
});

app.post("/form_input", function(req, res){
    todo_list.push(req.body);

    // console.log(req.body);
    return res.render('home',{
        todo_list : todo_list
    });
});

app.get('/deleteTask', function(req, res){
    for (var i=0; i<todo_list.length; i++)
    {
        if(i == req.query.task)
        {
            todo_list.splice(i, 1);
        }
    }

    return res.render("home", {
        todo_list: todo_list
    })
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