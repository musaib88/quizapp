const express=require('express')
const ClozeQuestion=require('../models/ClozeQuestion')
const router=express()
// create

router.post("/create", async (req,res)=>{
    try {
        const newCloze=  new ClozeQuestion({
            questionText:req.body.questionText,
            blanks:req.body.blanks
        })
        const savedCloze=await newCloze.save()
        res.status(200).json(savedCloze)
        
    } catch (error) {
        res.status(400).json("somthing wrong")
        
    }
    
})

module.exports=router;