const mongoose=require('mongoose')
const ComprehensionQuesSchema= new mongoose.Schema({
    passageData:{
    type:String,
    required:true
    },
    questionUrl:{
        type:String,
        required:false


    },
    multipleChoiceQuestions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MultipleChoice',
        required:true,}

    ]  
   
})

module.exports=mongoose.model("ComprehensionQuestion",ComprehensionQuesSchema)