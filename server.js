const express= require('express');
const app= express();

const path= require('path');

const buildPath = path.join(__dirname, 'build');
const port = process.env.PORT || 3000;

require('dotenv').config();
console.log(process.env.DATABASE_URL);
const mongoose= require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true});
const db= mongoose.connection;
db.on('error', (err)=>{console.error(err)});
db.once('open',()=>{
   console.log('connected');
})
const answerSchema = new mongoose.Schema({
   number: {
     type: Number,
     required: true
   },
   question: {
      type: String,
      required: true
   },
   answer: {
      type: String,
      required: true
   },
   link: {
      type: String,
      required: true
   }
 });

const parsedSchema = new mongoose.Schema({
   info: {
     type: Array,
     required: true
   }
 });

const RiddleData= mongoose.model('Parsed',parsedSchema);

const AnswerData = mongoose.model('Answer',answerSchema)

app.use(express.static(buildPath));

app.get('/leaderboard',(req,res)=>{
   console.log('req');
   RiddleData.find((err,data)=>{
      if(err){
         res.status(404).send();
         console.log(err);
      }
      else{
         console.log(data);
         res.send(data);
      }
   });
})

app.get('/oldRiddles',(req,res)=>{
   console.log('req');
   AnswerData.find((err,data)=>{
      if(err){
         res.status(404).send();
         console.log(err);
      }
      else{
         console.log(data);
         res.send(data);
      }
   });
})

app.get('*', (req, res) => {
   res.sendFile(path.join(buildPath, 'index.html'));
});


app.listen(port, () => {
   console.log('server');
});