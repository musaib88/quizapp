const express=require('express')
const ClozeQuestion=require('../models/ClozeQuestion')
const router=express()
const imgUpload=require('../multer/multer');
// create

router.post("/create",imgUpload, async (req,res)=>{
    try {
        const newCloze=  new ClozeQuestion({
            questionText:req.body.questionText,
            blanks:req.body.blanks,
            clozeImg:req.body.photourl

        })
        const savedCloze=await newCloze.save()
        res.status(200).json(savedCloze)
        
    } catch (error) {
        res.status(400).json("somthing wrong")
        
    }
    
})

module.exports=router;