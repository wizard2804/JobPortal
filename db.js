const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://saket:kaleenbhaiya@cluster0.7aygt.mongodb.net/jobportal' , {useNewUrlParser : true});
         console.log('Mongo DB Connection successful')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose
