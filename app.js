var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var app = express();
var EmployeeRouter = require('./routers/Employees')
var url = "mongodb+srv://vivekchavda:123@cluster0.sbq38.mongodb.net/Employee?retryWrites=true&w=majority"
app.use(bodyParser.urlencoded({extended:true})) 
app.use(express.json())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
var con  = mongoose.connection;
app.use('/Employees',EmployeeRouter)
con.on('open',()=>{
    console.log("Connected")
})

app.listen(process.env.PORT || 9000,(err)=>{
    console.log('Server started')
})