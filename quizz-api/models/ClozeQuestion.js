const mongoose=require('mongoose')
const ClozeSchema=new mongoose.Schema({
      questionText:{
        type:String,
        required:true,

      },
      blanks:{
        type:Array,
        required:true

      }



},
{timestamps:true})


module.exports=mongoose.model('ClozeQuestion',ClozeSchema)