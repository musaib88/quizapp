const express=require('express')
const router=express()
const CatagoryQuestion=require('../models/CatagoryQuestion')

// create

router.post("/create",async (req,res)=>{
    try {
        const catquestions=  new CatagoryQuestion({
            questionDesc:req.body.questionDesc,
            questionImg:req.body.questionImg,
            catagories:req.body.catagories,
            catagoryMatches:req.body.catagoryMatches,
            catPairs:req.body.catPairs
        
            
         })
         
         const savedData=await catquestions.save()
         console.log(savedData)
         res.status(200).json(savedData)
           
    } catch (error) {
        res.status(400).json("somthing wrong")
        
    }
 
})

module.exports=router;
