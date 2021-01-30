var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var app = express();
var EmployeeRouter = require('./routers/Employees')
var url = "mongodb+srv://vivekchavda:123@cluster0.sbq38.mongodb.net/Employee?retryWrites=true&w=majority"
app.use(bodyParser.urlencoded({extended:true})) 
app.use(express.json())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify: true}).then(()=>{
	app.use('/',EmployeeRouter)
	app.listen(process.env.PORT || 9000,(err)=>{
        if(err)
        {
        console.log(err);
        }
        console.log('Server started')
    })
});

<<<<<<< HEAD
=======

>>>>>>> 10cf044d8541759193b944f9f8339d028963bcda

