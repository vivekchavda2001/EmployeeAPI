var express = require('express')
var router = express.Router()
var Employee =  require('../model/employee')

router.get("/",async(req,res)=>{
    try{
        const emp = await Employee.find()
        res.json(emp)
    }
    catch(err){
        res.json(err)
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const emp = await Employee.findById(req.params.id)
        res.json(emp)
    }
    catch(err){
        res.json(err)
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const emp = await Employee.findById(req.params.id)
        emp.name = req.body.name;
        updateResult = await emp.save()
        res.json(updateResult)
    }
    catch(err){
        res.json(err)
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const emp = await Employee.findByIdAndRemove(req.params.id)
        res.json(emp)
    }
    catch(err){
        res.json(err)
    }
})


router.post("/",async(req,res)=>{

   const  EmployeeData = new Employee({
        name:req.body.name,
        position:req.body.position    

    })
    try{
        const emp = await EmployeeData.save()
        res.json(emp)    

    }catch(err){
        res.send(err);

    }
    
});
module.exports = router