const mongoose=require('mongoose');
const CatagoryQuestionSchema=require('./CatagoryQuestion')

const QuizSchema=new mongoose.Schema({
    quizName:{
        type:String,
        required:true
    },
    catagoryQuestions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CatagoryQuestion',
        required:false,
      }],

    clozeQuestions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClozeQuestion',
        required:false,}

    ]  ,
    comprehensionQuestions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ComprehensionQuestion',
        required:false,}

    ]  


},
{timestamps:true}

);
module.exports=mongoose.model('Quiz',QuizSchema)