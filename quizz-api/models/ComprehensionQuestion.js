const mongoose=require('mongoose')
const ComprehensionQuesSchema= new mongoose.Schema({
    passageData:{
    type:String,
    required:true
    },
    multipleChoiceQuestions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MultipleChoice',
        required:false,}

    ]  
})

module.exports=mongoose.model("ComprehensionQuestion",ComprehensionQuesSchema)