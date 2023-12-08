const mongoose=require('mongoose')

const CatagoryQuestionSchema=new mongoose.Schema({
   
   questionDesc:{
    type:String,
    required:true

   },
   questionImg:{
    type:String,
    required:false

   },
   catagories:{
    type:Array,
    required:true
   },
   catagoryMatches:{
    type:Array,
    required:true
   },
   catPairs:{
    type:[{
        catName:{
            type:String,
            required:true
        },
        catValue:{
            type:String,
            required:true
        }
    }

    ],
    required:true

   }
   


},{timestamps:true});
module.exports=mongoose.model('CatagoryQuestion',CatagoryQuestionSchema)