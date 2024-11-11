const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://wizard123:atharva123@cluster0.vb52r.mongodb.net/' , {useNewUrlParser : true});
         console.log('Mongo DB Connection successful')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose
