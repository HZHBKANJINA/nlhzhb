const mongoose=require('mongoose');

const stadionSchema=new mongoose.Schema({
    naziv:String,
    lokacija:{type:mongoose.Schema.Types.ObjectId,ref:'adresa'}
});

module.exports=mongoose.model('stadioni',stadionSchema);