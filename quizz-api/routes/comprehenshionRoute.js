const express = require("express");
const ComprehenshionQuestion = require("../models/ComprehensionQuestion");
const router = express();
const uploadImg=require('../multer/multer')
router.post("/create",uploadImg,async (req, res) => {
  try {
    const newCompre = new ComprehenshionQuestion({
      passageData: req.body.passageData,
      multipleChoiceQuestions:req.body.multipleChoiceQuestions,
      questionUrl:req.body.photourl
    });
    const savedDta = await newCompre.save();
    res.status(200).json(savedDta)
  } catch (error) {
    res.status(400).json("somthing is wrong in comptehension")

  }
});

module.exports=router;