const express=require('express')
const MultipleChoice=require('../models/MultipleChoice');
router=express();

// create
router.post("/create", async (req,res)=>{
    try {
        const newMultiChioce=new MultipleChoice({
            questionText:req.body.questionText,
            options:req.body.options,
            correctAnswer:req.body.correctAnswer
        })


        const resposne= await newMultiChioce.save()
        res.status(200).json(resposne)
        
    } 
    
    catch (error) {
        res.status(400).json("in error")
    }
})
module.exports=router;