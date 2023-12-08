const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const quizRoute=require('./routes/quizRoute')
const catroute=require('./routes/catagoryRoute')
const clozeRoute=require('./routes/clozeRoute')
const compreRoute=require("./routes/comprehenshionRoute")
const multipleChoiceRoute=require('./routes/multipleChoiceRoute')
//  testing 
app.use("/hello",()=>{
    console.log("i am listening")
})
dotenv.config()
app.use(express.json())


mongoose.connect(process.env.MONGO_URL).then(console.log("db connected")).catch((error)=>{
    console.log(error)
})
app.use('/images', express.static('images'));

app.use('/api/question/multichoice',multipleChoiceRoute)
app.use('/api/question/comprehension',compreRoute)
app.use('/api/question/cloze',clozeRoute)
app.use("/api/quiz",quizRoute)
app.use('/api/question/cat',catroute)
app.listen(5000,()=>{
    console.log("running")
})