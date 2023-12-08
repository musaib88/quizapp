const express=require("express")
const router=express()
const Quiz=require('../models/Quiz')

// creeate quiz
router.post('/create',async (req,res)=>{
    try {
        const quiz=  new Quiz({quizName:req.body.quizName,
            catagoryQuestions:req.body.catagoryQuestions,
            comprehensionQuestions:req.body.comprehensionQuestions,
            clozeQuestions:req.body.clozeQuestions

            
        })
        const savedquiz=quiz.save()
     res.status(200).json("success")
     console.log("hello",savedquiz)
        
    } catch (error) {
        res.status(400).json("somthing wrong")
    }
    
        
    
    
})
router.get('/find/:quizId', async (req, res) => {
    const quizId = req.params.quizId;
  
    try {
      const quiz = await Quiz.findById(quizId)
        .populate('catagoryQuestions')
        .populate('clozeQuestions')
        .populate(
            {
                path: 'comprehensionQuestions',
                populate: { path: 'multipleChoiceQuestions' } // Add more as needed
              }
        );
  
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
  
      res.status(200).json({ quiz });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

module.exports=router

