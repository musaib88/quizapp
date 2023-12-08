const express = require("express");
const ComprehenshionQuestion = require("../models/ComprehensionQuestion");
const router = express();
router.post("/create", async (req, res) => {
  try {
    const newCompre = new ComprehenshionQuestion({
      passageData: req.body.passageData,
      multipleChoiceQuestions: req.body.multipleChoiceQuestions,
    });
    const savedDta = await newCompre.save();
    res.status(200).json(savedDta)
  } catch (error) {
    res.status(400).json("somthing is wrong")

  }
});

module.exports=router;