const mongoose=require('mongoose')
const ClozeSchema=new mongoose.Schema({
      questionText:{
        type:String,
        required:true,

      },
      blanks:{
        type:Array,
        required:true

      },
      clozeImg:{
        type:String,
        required:false
      }



},
{timestamps:true})


module.exports=mongoose.model('ClozeQuestion',ClozeSchema)