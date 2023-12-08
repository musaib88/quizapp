const mongoose=require('mongoose')
const MultipleChoiceSchema= new mongoose.Schema({
    questionText:{
        type:String,
        required:true
    },
    options:{
        type:Array,
        required:true
    },
    correctAnswer:{
        type:String,
        required:true
    }
})



module.exports=mongoose.model('MultipleChoice',MultipleChoiceSchema)